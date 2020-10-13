import { ChangeDetectorRef, Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Toast, ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { customResponse } from 'src/app/models/customResponse';
import { DepositDto } from 'src/app/models/Dto/DepositDto';
import { Package } from 'src/app/models/Packages';
import { AccountService } from 'src/app/services/account.service';
import { badgeColor } from 'src/app/services/badge.service';
import { DepositService } from 'src/app/services/depost.service';
import { InvestmentService } from 'src/app/services/investment.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss'],
})
export class PackagesComponent implements OnInit {
  colors: string[] = [
    '#f1f4f9',
    '#d4dfed',
    '#c6d4e7',
    '#a9bfda',
    '#8da9ce',
    '#436a9d',
    '#2b4464',
    '#182739',
    '#0c131d',
  ];
  $packages: Observable<Package[]>;
  modalRef: BsModalRef;
  packageForm: FormGroup;
  depositClicked: boolean = false;

  constructor(
    private _packages: InvestmentService,
    private _modalService: BsModalService,
    private _formBuilder: FormBuilder,
    private _depositService: DepositService,
    private cd: ChangeDetectorRef,
    private _accountService: AccountService,
    private _toaster: ToastrService
  ) {
    this.packageForm = this._formBuilder.group({
      Name: [{ value: '', disabled: true }],
      Amount: [
        { value: '', disabled: true },
        [Validators.required, Validators.min(50)],
      ],
      DepositProof: [null, Validators.required],
      PackageId: [],
    });
  }

  ngOnInit(): void {
    this.$packages = this._packages.allPackages();
  }

  openModal(template: TemplateRef<any>, p: Package) {
    this.depositClicked = false;
    this.packageForm.controls.Name.setValue(p.name);
    this.packageForm.controls.Amount.setValue(p.price);
    this.packageForm.controls.PackageId.setValue(p.id);
    this.packageForm.controls.Amount.disable();
    this.packageForm.controls.DepositProof.setValue(null);

    if (p.price <= 0) {
      this.packageForm.controls['Amount'].enable();
    }
    this.modalRef = this._modalService.show(template, {
      id: 1,
      class: 'modal-lg',
    });
  }

  deposit() {
    this.depositClicked = true;
    if (this.packageForm.valid) {
      let deposit: DepositDto = this.packageForm.value;
      deposit.InvestorId = this._accountService.currentUserValue.id;
      console.log(deposit);

      this._depositService.makeDeposit(deposit).subscribe(
        (res: customResponse) => {
          if (res.success) {
            this._toaster.success(res.message);
          } else {
            this._toaster.error(res.message);
          }
        },
        (err) => {}
      );
    }
  }

  get Amount() {
    return this.packageForm.controls.Amount;
  }

  get DepositProof() {
    return this.packageForm.controls.DepositProof;
  }

  get Name() {
    return this.packageForm.controls.Name;
  }

  onFileChange(event) {
    let reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.packageForm.patchValue({
          DepositProof: reader.result,
        });

        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }
}

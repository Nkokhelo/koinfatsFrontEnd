import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { DepositState } from 'src/app/Enums/koinfastEnums';
import { Deposit } from 'src/app/models/Deposit';
import { AccountService } from 'src/app/services/account.service';
import { badgeColor } from 'src/app/services/badge.service';
import { DepositService } from 'src/app/services/depost.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-deposits',
  templateUrl: './deposits.component.html',
  styleUrls: ['./deposits.component.scss'],
})
export class DepositsComponent implements OnInit {
  $deposits: Observable<Deposit[]>;
  state: any = DepositState;
  badgeBg: Map<string, string> = this._colorServices.color;
  deposit: Deposit;
  proofOfPayment: string = '../../../assets/loading/200.gif';
  isLoading: boolean;
  modalRef: BsModalRef;

  constructor(
    private _depositsService: DepositService,
    private _accountService: AccountService,
    private _colorServices: badgeColor,
    private _formBuilder: FormBuilder,
    private _modalService: BsModalService,
    private _toastr: ToastrService,
    private _loadingBar : LoadingBarService
  ) {}

  ngOnInit(): void {
    this.$deposits = this._depositsService.allDeposits();
    this.$deposits.subscribe((d) => console.log(d));
  }

  openModal(template: TemplateRef<any>, d: Deposit) {
    this.deposit = d;
    this.proofOfPayment = environment.apiUrl + d.proofUrl;
    this.modalRef = this._modalService.show(template, {
      id: 1,
      class: 'modal-lg',
    });
  }

  approve() {
    this.isLoading = true;
    this._depositsService.changeState(this.deposit.id, 'Approved').subscribe(
      (p) => {
        console.log(p);
        this._toastr.success(
          this.deposit.investor.name +
            ' ' +
            this.deposit.investor.surname +
            "'s deposit has been approve"
        );
        this.modalRef.hide();
      },
      (err) => {
        this._toastr.error('Error while trying to update deposit');
        this.modalRef.hide();

        console.log(err);
      }
    );
    this.isLoading = false;
  }

  decline() {
    this.isLoading = true;
    this._depositsService.changeState(this.deposit.id, 'Declined').subscribe(
      (p) => {
        console.log(p);
        this._toastr.success(
          this.deposit.investor.name +
            ' ' +
            this.deposit.investor.surname +
            "'s deposit has been declined"
        );
        this.modalRef.hide();
      },
      (err) => {
        this._toastr.error('Error while trying to update deposit');
        this.modalRef.hide();

        console.log(err);
      }
    );
    this.isLoading = false;
  }
}

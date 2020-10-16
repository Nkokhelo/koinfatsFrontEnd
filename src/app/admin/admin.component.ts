import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { DepositState } from '../Enums/koinfastEnums';
import { WalletDto } from '../models/Dto/WalletDto';
import { currentUser } from '../models/User';
import { AccountService } from '../services/account.service';
import { DepositService } from '../services/depost.service';
import { WalletService } from '../services/wallet.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  isCollapsed: boolean = false;
  currentUser: currentUser;
  deposits: number;
  pending: string;
  walletSubmitted: boolean = false;
  modalRef: BsModalRef;
  walletForm: FormGroup;
  isLoading: boolean;

  constructor(
    private _accountService: AccountService,
    private _walletService: WalletService,
    private _depositsService: DepositService,
    private _modalService: BsModalService,
    private _formBuilder: FormBuilder,
    private _toastr: ToastrService
    ) {
    this.currentUser = this._accountService.currentUserValue;
    
    this.walletForm = this._formBuilder.group({
      Token: ['',[Validators.required, Validators.minLength(30)]]
    });

  }
  
  get Token() {
    return this.walletForm.controls.Token;
  }

  ngOnInit(): void {
    // pending = 
    this._depositsService.depositsByStatus('Pending').subscribe(
      (d) => {
        console.log(d);
        this.deposits = d.length;
      },
      (err) => {
        console.log(err);
    })
  }

  logout() {
    // console.log('logout')
    this._accountService.logout();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this._modalService.show(template, {
      id: 30,
      class: 'modal-md',
    });
   }

  updateWallet() {

    this.walletSubmitted= true;
    if(this.walletForm.valid) { 
      this.isLoading = true;
      var wallet: WalletDto=new WalletDto();
      wallet.walletToken = this.walletForm.controls.Token.value;
      this._walletService.addWallet(wallet).subscribe(
        (d) => {
          this._toastr.success("wallet was updated");
          var user:currentUser = JSON.parse(localStorage.getItem("currentUser"));
          user.walletToken = wallet.walletToken;
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.modalRef.hide();

        },
        (erro) => {
          console.log(erro);
          this.isLoading = false;
          this._toastr.error("Unable to update wallet");
          this.modalRef.hide();
        }
      );
    }

  }
}

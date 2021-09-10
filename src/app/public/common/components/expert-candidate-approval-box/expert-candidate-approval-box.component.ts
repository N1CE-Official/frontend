import { Component, Input, OnInit } from '@angular/core';
import { WalletService } from '../../../../shared/services/wallet.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-expert-candidate-approval-box',
  templateUrl: './expert-candidate-approval-box.component.html',
  styleUrls: ['./expert-candidate-approval-box.component.css']
})
export class ExpertCandidateApprovalBoxComponent implements OnInit {
  @Input() votes?: number;

  stakingAmount!: number;
  modalRef!: NgbActiveModal;
  invalidAmount = false;

  constructor(
    private walletService: WalletService,
    private modalService: NgbModal
  ) {
  }

  ngOnInit(): void {
  }

  showStakeDialog(content: any) {
    if (this.walletService.ready) {
      this.modalRef = this.modalService.open(content, {centered: true});
    } else {
      this.walletService.bootstrapWeb3();
      this.walletService.accountsObservable.subscribe(
        () => {
          if (!this.modalService.hasOpenModals()) {
            this.modalRef = this.modalService.open(content, {centered: true});
          }
        }
      )
    }
  }

  stake() {
    if (this.validAmount()) {
      // TODO: do something
      this.stakingAmount = 0;
      this.modalRef.dismiss();
    } else {
      this.invalidAmount = true;
    }
  }

  validAmount(): boolean {
    return !!this.stakingAmount && this.stakingAmount >= 100 && this.stakingAmount <= this.walletService.currentBalance;
  }

  setMaxAmount() {
    this.stakingAmount = this.walletService.currentBalance;
  }

  invalidMessage(): string {
    if (!this.stakingAmount) {
      return "Please enter an amount";
    }
    if (this.stakingAmount < 100) {
      return "Amount to stake must be at least 100";
    }
    if (this.stakingAmount > this.walletService.currentBalance) {
      return "Amount to stake can't be higher than your balance";
    }
    return "";
  }
}

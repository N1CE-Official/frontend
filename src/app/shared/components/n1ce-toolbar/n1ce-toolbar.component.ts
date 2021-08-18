import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { WalletService } from '../../services/wallet.service';

@Component({
  selector: 'app-n1ce-toolbar',
  templateUrl: './n1ce-toolbar.component.html',
  styleUrls: ['./n1ce-toolbar.component.css']
})
export class N1ceToolbarComponent implements OnInit {
  public isMenuCollapsed = true;
  public connectedAccount!: string | null;

  constructor(
    public walletService: WalletService,
    private _cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  connectWallet() {
    this.walletService.bootstrapWeb3();
    this.walletService.accountsObservable.subscribe(
      value => {
        this.connectedAccount = this.shorten(value[0]);
        this._cdr.detectChanges();
      }
    )
  }

  shorten(str: string): string {
    const suffix = str.substr(str.length - 4, 4);
    return "0x" + "..." + suffix;
  }

  disconnectWallet() {
    this.walletService.disconnect();
    this.connectedAccount = null;
    this._cdr.detectChanges();
  }
}

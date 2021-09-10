import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { WalletService } from '../../services/wallet.service';
import { AuthService } from '../../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-n1ce-toolbar',
  templateUrl: './n1ce-toolbar.component.html',
  styleUrls: ['./n1ce-toolbar.component.css']
})
export class N1ceToolbarComponent implements OnInit {
  public isMenuCollapsed = true;
  public connectedAccount!: string | null;
  public n1ceBalance!: any;

  constructor(
    public walletService: WalletService,
    private _cdr: ChangeDetectorRef,
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.walletService.bootstrapWeb3();
    this.walletService.accountsObservable.subscribe(
      walletAddress => {
        this.connectedAccount = this.shorten(walletAddress[0]);
        this._cdr.detectChanges();
        this.walletService.getBalance(walletAddress[0]);
      }
    );
    this.walletService.balanceObservable.subscribe(
      balance => {
        this.n1ceBalance = balance;
        this._cdr.detectChanges();
      }
    );
  }

  connectWallet() {
    this.walletService.bootstrapWeb3();
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

  signOut() {
    this.authService.logout();
    window.location.reload();
  }
}

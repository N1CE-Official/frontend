import { Component, OnInit } from '@angular/core';
import { WalletService } from '../../services/wallet.service';

@Component({
  selector: 'app-n1ce-toolbar',
  templateUrl: './n1ce-toolbar.component.html',
  styleUrls: ['./n1ce-toolbar.component.css']
})
export class N1ceToolbarComponent implements OnInit {
  public isMenuCollapsed = true;
  public connectedAccount!: string;

  constructor(
    public walletService: WalletService
  ) { }

  ngOnInit(): void {
  }

  connectWallet() {
    this.walletService.bootstrapWeb3();
    this.walletService.accountsObservable.subscribe(
      value => {
        this.connectedAccount = this.shorten(value[0]);
      }
    )
  }

  shorten(str: string): string {
    const suffix = str.substr(str.length - 4, 4);
    return "0x" + "..." + suffix;
  }
}

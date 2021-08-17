import { Component, OnInit } from '@angular/core';
import { WalletService } from '../../services/wallet.service';

@Component({
  selector: 'app-n1ce-toolbar',
  templateUrl: './n1ce-toolbar.component.html',
  styleUrls: ['./n1ce-toolbar.component.css']
})
export class N1ceToolbarComponent implements OnInit {
  public isMenuCollapsed = true;

  constructor(
    public walletService: WalletService
  ) { }

  ngOnInit(): void {
  }

  connectWallet() {
    this.walletService.bootstrapWeb3();
  }
}

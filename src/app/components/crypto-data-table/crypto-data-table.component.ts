import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../crypto/services/api.service';
import { CryptoData } from "../../crypto/models/crypto-data";

@Component({
  selector: 'app-crypto-data-table',
  templateUrl: './crypto-data-table.component.html',
  styleUrls: ['./crypto-data-table.component.sass']
})
export class CryptoDataTableComponent implements OnInit {

  cryptoDataTable: CryptoData[];
  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
    this.apiservice.getCryptoData().subscribe(table => (this.cryptoDataTable = table));
  }

  formatNumberToFixed2(valor) {
    return isNaN(valor) ? valor : parseFloat(valor).toFixed(2);
  }
}
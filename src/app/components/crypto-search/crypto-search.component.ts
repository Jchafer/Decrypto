import { ApiService } from './../../crypto/services/api.service';
import { CryptoData } from './../../crypto/models/crypto-data';
import { CryptoDataTableComponent } from '../crypto-data-table/crypto-data-table.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-crypto-search',
  templateUrl: './crypto-search.component.html',
  styleUrls: ['./crypto-search.component.sass']
})
export class CryptoSearchComponent implements OnInit {

  filterText: string = '';
  
  constructor(private apiservice: ApiService) { }
  //@ViewChild(CryptoDataTableComponent) table;
  public cryptoDataTable: CryptoData[];

  ngOnInit() {
    this.apiservice.getCryptoData().subscribe(table => (this.cryptoDataTable = table));
  }

  /*ngAfterViewInit() {
    this.tableCryptoData = this.table.cryptoDataTable;
  }*/

  public pulsa(){
    console.log("hola");
  }

  /*public listCryptoSearch(searchValue) {
    console.log("ENTRA");
    let cryptoDataFiltered: CryptoData[];
    this.tableCryptoData.forEach(element => {
      if (element.name.includes(searchValue)){
        //cryptoDataFiltered.push(element);
        console.log(searchValue);
      }
    });

    console.log("ENTRA");
  }*/
  
}

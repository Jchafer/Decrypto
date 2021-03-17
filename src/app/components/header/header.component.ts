import { CryptoDataTableComponent } from './../crypto-data-table/crypto-data-table.component';
import { CryptoData } from './../../crypto/models/crypto-data';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../crypto/services/api.service';
import { Observable, Subject } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  keyword = 'name';
  data = [
     {
       id: 1,
       name: 'Usa'
     },
     {
       id: 2,
       name: 'England'
     }
  ];
  
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

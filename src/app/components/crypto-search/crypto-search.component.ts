import { ApiService } from '../../services/api.service';
import { CryptoData } from '../../models/crypto-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crypto-search',
  templateUrl: './crypto-search.component.html',
  styleUrls: ['./crypto-search.component.sass']
})
export class CryptoSearchComponent implements OnInit {

  keyword = 'name';
  //filterText: string = '';
  
  constructor(private apiservice: ApiService) { }
  
  public cryptoDataList: CryptoData[];

  ngOnInit() {
    this.apiservice.getCryptoData().subscribe(list => (this.cryptoDataList = list));
  }
  
}

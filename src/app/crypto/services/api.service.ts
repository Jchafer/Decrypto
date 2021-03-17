import { Injectable } from '@angular/core';
import { CryptoData } from './../models/crypto-data';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //private cryptoData: CryptoData = {market_cap_rank: 0, image: '', name: '', current_price: 0, market_cap: 0, price_change_percentage_24h: 0};
  private cryptoUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

  constructor(private http: HttpClient) { }

  public getCryptoData(): Observable<CryptoData[]> {
    return this.http.get<CryptoData[]>(this.cryptoUrl);
  }

}

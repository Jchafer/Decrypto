import { CryptoFilterPipe } from './crypto-filter.pipe';
import { CryptoSearchComponent } from './components/crypto-search/crypto-search.component';
import { CryptoDataTableComponent } from './components/crypto-data-table/crypto-data-table.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { CryptoModule } from './crypto/crypto.module';
import { AutocompleteLibModule} from 'angular-ng-autocomplete';
//import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CryptoDataTableComponent,
    CryptoSearchComponent,
    CryptoFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CryptoModule,
    AutocompleteLibModule,
    //FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

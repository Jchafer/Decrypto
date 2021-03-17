import { CryptoFilterPipe } from './crypto-filter.pipe';
import { CryptoSearchComponent } from './components/crypto-search/crypto-search.component';
import { CryptoDataTableComponent } from './components/crypto-data-table/crypto-data-table.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { CryptoModule } from './crypto/crypto.module';
import { AutocompleteLibModule} from 'angular-ng-autocomplete';

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
    FormsModule,
    AutocompleteLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

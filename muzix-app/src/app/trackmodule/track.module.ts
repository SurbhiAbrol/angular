import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';

import { CommonModule } from '@angular/common';
import { CardcomponentComponent } from './cardcomponent/cardcomponent.component';
import { CardcontainercomponentComponent } from './cardcontainercomponent/cardcontainercomponent.component';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { FootercomponentComponent } from './footercomponent/footercomponent.component';
import { WishlistcomponentComponent } from './wishlistcomponent/wishlistcomponent.component';
import { SearchcomponentComponent } from './searchcomponent/searchcomponent.component';
import { PagenotfoundcomponentComponent } from './pagenotfoundcomponent/pagenotfoundcomponent.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [CardcomponentComponent, CardcontainercomponentComponent, HeadercomponentComponent, FootercomponentComponent, WishlistcomponentComponent, SearchcomponentComponent,  PagenotfoundcomponentComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule
  ],
  // tslint:disable-next-line:max-line-length
  exports: [CardcomponentComponent, CardcontainercomponentComponent, HeadercomponentComponent, FootercomponentComponent, WishlistcomponentComponent, SearchcomponentComponent, PagenotfoundcomponentComponent]
})
export class TrackModule { }

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemPriceComponent } from './item-price/item-price.component';
import { ItemPriceFluctuationComponent } from './item-price-fluctuation/item-price-fluctuation.component';
import { NavbarComponent } from './navbar/navbar.component';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ItemMenuService } from './services/item-menu.service'

@NgModule({
  declarations: [
    AppComponent,
    ItemPriceComponent,
    ItemPriceFluctuationComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MaterialModule,    
    BrowserAnimationsModule,    
    ReactiveFormsModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    
  ],
  exports: [

  ],
  providers: [ItemMenuService],
  bootstrap: [AppComponent],
  
})
export class AppModule {}

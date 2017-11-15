import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { AppRoutingModule } from './app-routing.module';
import {ProductshippingService} from "./productshipping.service";
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './index/home/home.component';
import { ProductlistComponent } from './index/productlist/productlist.component';
import { ProductcreationComponent } from './index/productcreation/productcreation.component';
import { ProducteditComponent } from './index/productedit/productedit.component';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HomeComponent,
    ProductlistComponent,
    ProductcreationComponent,
    ProducteditComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ProductshippingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

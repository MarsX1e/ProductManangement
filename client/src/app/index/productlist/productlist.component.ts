import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ProductshippingService} from "./../../productshipping.service";
import {Product} from "./../../product";
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductlistComponent implements OnInit {
  products:Array<Product>;
  constructor(private _service:ProductshippingService) {
  console.log(this._service.products);
  this.products=this._service.retrieveproduct();
  console.log(this.products);
   } 
   delete(index){
    this._service.products[index]=this._service.products[this._service.products.length-1];
    this._service.products[index].index=index;
    this._service.products.pop();
  }
  ngOnInit() {
  }

}

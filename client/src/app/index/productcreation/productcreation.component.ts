import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Product} from "./../../product";
import {Router} from "@angular/router";
import {ProductshippingService} from "./../../productshipping.service"
@Component({
  selector: 'app-productcreation',
  templateUrl: './productcreation.component.html',
  styleUrls: ['./productcreation.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductcreationComponent implements OnInit {
  product:Product;

  constructor(private _route:Router,private _service:ProductshippingService) {
    this.product=new Product();
   }
  create(){
    console.log(this.product);
    this._service.addproduct(this.product);
    console.log(this._service.products);
    this._route.navigate(["products"]);
  }
  ngOnInit() {
  }

}

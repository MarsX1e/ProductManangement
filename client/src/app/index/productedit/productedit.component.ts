import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Product } from '../../product';
import { ProductshippingService } from '../../productshipping.service';
@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProducteditComponent implements OnInit {
  product:Product;
  constructor(private _route:ActivatedRoute,private _service:ProductshippingService,private route:Router) {
    this._route.paramMap.subscribe(params=>{
      this.product=this._service.products[params.get("id")];
      console.log(this.product);
    })
   }
  update(){
    this._service.products[this.product.index]=this.product;
    this.route.navigate(["/products"]);
  }
  delete(index){
    this._service.products[index]=this._service.products[this._service.products.length-1];
    this._service.products[index].index=index;
    this._service.products.pop();
    this.route.navigate(["products"]);
  }
  ngOnInit() {
  }

}

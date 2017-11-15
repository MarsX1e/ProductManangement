import { Injectable } from '@angular/core';
import {Product} from "./product";
@Injectable()
export class ProductshippingService {
  products:Array<Product>;
  constructor() { 
    this.products=[];
  }
  addproduct(product:Product){
    product.index=this.products.length;
    this.products.push(product);

  }
  retrieveproduct(){
    return this.products;
  }
}

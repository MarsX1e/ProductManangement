import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductshippingService } from '../productshipping.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DeleteComponent implements OnInit {

  constructor(private _route:ActivatedRoute,private _service:ProductshippingService) { 
    this._route.paramMap.subscribe(params=>{
      
    })
  }

  ngOnInit() {
  }

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './index/home/home.component';
import { IndexComponent } from './index/index.component';
import { ProductcreationComponent } from './index/productcreation/productcreation.component';
import { ProductlistComponent } from './index/productlist/productlist.component';
import { ProducteditComponent } from './index/productedit/productedit.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  {
    path:"",
    component:IndexComponent,
    children:[
      {
        path:"",
        pathMatch:"full",
        component:HomeComponent,
      },
      {
        path:"products/new",
        pathMatch:"full",
        component:ProductcreationComponent,
      },
      {
        path:"products",
        pathMatch:"full",
        component:ProductlistComponent,
      },
      {
        path:"products/edit/:id",
        pathMatch:"full",
        component:ProducteditComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateAccountComponent} from './components/create-account/create-account.component';
import {StuffComponent} from './components/stuff/stuff.component';
import {AddEmployerComponent} from './components/add-employer/add-employer.component';
import {AddDepartmentComponent} from './components/add-department/add-department.component';
import {ProductsComponent} from './components/products/products.component';
import {AddProductComponent} from './components/add-product/add-product.component';
import {AddCatagoryComponent} from './components/add-catagory/add-catagory.component';
import {ProfileComponent} from './components/profile/profile.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
const routes: Routes = [
  {
    path:"create-account",
    component:CreateAccountComponent
  },
  {
    path:"stuff",
    component:StuffComponent
  },
  {
    path:"add-employer",
    component:AddEmployerComponent
  },
  {
    path:'add-department',
    component:AddDepartmentComponent
  },
  {
    path:'products',
    component:ProductsComponent
  },
  {
    path:'add-product',
    component:AddProductComponent
  },
  {
    path:'add-catagory',
    component:AddCatagoryComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

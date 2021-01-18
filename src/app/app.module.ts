import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { StuffComponent } from './components/stuff/stuff.component';
import { AddEmployerComponent } from './components/add-employer/add-employer.component';
import { AddDepartmentComponent } from './components/add-department/add-department.component';
import { ProductsComponent } from './components/products/products.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AddCatagoryComponent } from './components/add-catagory/add-catagory.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    CreateAccountComponent,
    StuffComponent,
    AddEmployerComponent,
    AddDepartmentComponent,
    ProductsComponent,
    AddProductComponent,
    AddCatagoryComponent,
    ProfileComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

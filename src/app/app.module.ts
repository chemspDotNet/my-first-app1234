import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { Parent1Module } from './modules/parent1.module';
import { Parent2Module } from './modules/parent2.module';
import { Parent1Component } from './parent1/parent1.component';
import { Parent2Component } from './parent2/parent2.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';

import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';



 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    CustomerComponent,  
    Parent1Component,
    Parent2Component,
    Child1Component,
    Child2Component,
    HighlightDirective,
    NotFoundComponent,
    LoginComponent,
    Test1Component,
    Test2Component,
    Test3Component  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

   
  ],
  providers: [],  
  bootstrap: [AppComponent] 
})
export class AppModule { }

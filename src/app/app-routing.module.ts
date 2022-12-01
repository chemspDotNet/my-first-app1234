import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductResolverService } from './gaurds/products-resolver.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';
import { environment} from '../environments/environment.prod' 
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes =[   // routes
{path: 'home', component: HomeComponent , data: [{env:environment},], canActivate:[AuthGuard],
 children:[
   { path:'', component: Test1Component, canActivateChild:[],},
   {path:'test2', component: Test2Component},
   {path:'test3', component:Test3Component},
   
 ]
},  // route 
{path: 'product', component: ProductComponent, resolve: { customers: ProductResolverService }, canActivate:[AuthGuard]},   //
{path: 'login', component: LoginComponent},
{path:'', redirectTo:'/login', pathMatch:'full'},
{path: '**', component: NotFoundComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

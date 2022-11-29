import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';

const routes: Routes =[   // routes
{path: 'home/:city', component: HomeComponent},  // route 
{path: 'product/:id1', component: ProductComponent},
{path: 'login', component: LoginComponent},
{path:'', redirectTo:'/login', pathMatch:'full'},
{path: '**', component: NotFoundComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

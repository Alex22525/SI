import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ContactComponent } from '../contact/contact.component';
import { ProductsComponent } from '../products/products.component';
import { ProductComponent } from '../product/product.component';
import { ProtectorGuard } from '../protector.guard';

// const routes: Route[] = [
//   {path: '', redirectTo: 'home', pathMatch: "full"},
//   {path: 'home', component: HomeComponent}
// ]

const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'about-us', component: AboutUsComponent, canActivate: [ProtectorGuard]},
  {path: 'contact', component: ContactComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'product/:id', component: ProductComponent},
  {path: '**', component: NotFoundComponent}
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

import { Routes } from '@angular/router';
import { ShopComponent } from './components/Front/shop/shop.component';
import { HeaderComponent } from './components/Front/header/header.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/Front/home/home.component';
import { HomePageComponent } from './components/Front/home-page/home-page.component';
import { ProductDetailComponent } from './components/Front/product-detail/product-detail.component';
import { BlogDetailComponent } from './components/Front/blog-detail/blog-detail.component';
import { BlogComponent } from './components/Front/blog/blog.component';
import { ContactComponent } from './components/Front/contact/contact.component';
import { CheckoutComponent } from './components/Front/checkout/checkout.component';
import { ShopCartComponent } from './components/Front/shop-cart/shop-cart.component';
import { RegisterComponent } from './components/Front/register/register.component';
import { LoginComponent } from './components/Front/login/login.component';
import { HomeBackComponent } from './components/Back/home-back/home-back.component';
import { TablesComponent } from './components/Back/tables/tables.component';
import { ProfileComponent } from './components/Back/profile/profile.component';
import { RtlComponent } from './components/Back/rtl/rtl.component';
import { BillingComponent } from './components/Back/billing/billing.component';

export const routes: Routes = [
  
   
    {path: '', component: HomeBackComponent,},
    { path: 'shop', component: ShopComponent },
    { path: 'product-detail', component: ProductDetailComponent },
    { path: 'blog-detail', component: BlogDetailComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'shop-cart', component: ShopCartComponent },
    { path: 'login', component: LoginComponent },
    { path: 'homeBack', component: HomeBackComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'tables', component: TablesComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'rtl', component: RtlComponent },
    { path: 'billing', component: BillingComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

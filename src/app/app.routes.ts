import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layout/blank-layout/blank-layout.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { SellersComponent } from './components/sellers/sellers.component';
import { SellerProductsComponent } from './components/seller-products/seller-products.component';
import { SaledProductComponent } from './components/saled-product/saled-product.component';

export const routes: Routes = [
    {path:'', component: AuthLayoutComponent, children:[
        {path:'', redirectTo:'login', pathMatch:'full'},
        {path: 'login', component:LoginComponent},
        {path: 'register', component: RegisterComponent}
    ]},
    {path: '', component: BlankLayoutComponent, children: [
        {path:'home',component:HomeComponent, pathMatch:'full'},
        {path: 'cart', component: CartComponent},
        {path: 'categories', component: CategoriesComponent},
        {path: 'home', component:HomeComponent},
        {path:'product', component:ProductComponent},
        {path:'sellers', component:SellersComponent},
        { path: 'seller/:id', component: SellerProductsComponent },
        {path:"salesProduct",component:SaledProductComponent}

    ]},
    {path: '**', component: NotfoundComponent}]

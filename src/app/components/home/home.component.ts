import { Component, inject, OnInit } from '@angular/core';
import { SaledProductComponent } from "../saled-product/saled-product.component";
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-home',
  imports: [SaledProductComponent,ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {


}

import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './components/product/product.component';


import { FooterComponent } from "./components/footer/footer.component";

import { HomeComponent } from "./components/home/home.component";
import { SellersComponent } from "./components/sellers/sellers.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, FormsModule, ProductComponent, FooterComponent, HttpClientModule, HomeComponent, SellersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HandMadeMarket';
  public apiBaseUrl = 'https://handmade.runasp.net/api'
}

 

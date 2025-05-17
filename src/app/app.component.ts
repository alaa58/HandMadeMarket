import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ProductComponent } from './components/product/product.component';
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductComponent, FooterComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HandMadeMarket';
}
 

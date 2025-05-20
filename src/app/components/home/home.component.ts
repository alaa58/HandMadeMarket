import { Component } from '@angular/core';
import { ProductComponent } from "../product/product.component";

@Component({
  selector: 'app-home',
  imports: [ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: any[] = [];
  selectedCategoryProducts: any[] = [];
  selectedCategoryId: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.http.get<any[]>('https://handmade.runasp.net/api/Catecory')
      .subscribe(data => {
        this.categories = data;
      });
  }

  onCategoryChange() {
    const selectedCategory = this.categories.find(cat => cat.categoryId == this.selectedCategoryId);
    this.selectedCategoryProducts = selectedCategory ? selectedCategory.products : [];
  }
}

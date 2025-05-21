import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getCategories() {
    throw new Error('Method not implemented.');
  }
  addProduct(formData: FormData) {
    throw new Error('Method not implemented.');
  }
productList:IProduct[]=[];
saledProductList:IProduct[]=[];
  constructor( private http:HttpClient) { }
baseUrl="https://handmade.runasp.net/api/Product";

getAllProducts(pageNumber: number, pageSize: number): Observable<{ data: IProduct[], totalPages: number }> {
  return this.http.get<{ data: IProduct[], totalPages: number }>(this.baseUrl, {
    params: {
      pageSize,
      pageNumber
    }
  });
}

getById(productId:string):Observable<IProduct>{
  return this.http.get<IProduct>(`${this.baseUrl}/${productId}`);
}

getSaledProducts():Observable<IProduct[]>{
 return this.http.get<IProduct[]>(`${this.baseUrl}/sale`);
}


getProductById(id:number):Observable<any>{
  return this.http.get(`${environment.apiBaseUrl}/Product/${id}`)
}
//all any will replace by Iproduct
}

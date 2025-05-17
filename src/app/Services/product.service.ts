import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
productList:any[]=[];
  constructor( private http:HttpClient) { }
baseUrl=" https://fakestoreapi.com/products";

getAllProducts(pageNumber: number, pageSize: number): Observable<any[]> {
   return this.http.get<any[]>(this.baseUrl, {
  //   params: {
  //     pageSize: pageSize,
  //     pageNumber: pageNumber
  //   }
  }
  );
}

getById(productId:number):Observable<any>{
  return this.http.get<any[]>(this.baseUrl, {
    //   params: {
    //     pageSize: pageSize,
    //     pageNumber: pageNumber
    //   }
    }
    );
}
//all any will replace by Iproduct
}

import { HttpClient } from '@angular/common/http'
import {inject, Injectable} from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from '../../../environments/environment'
import { ISeller } from '../interfaces/iseller'
@Injectable({
  providedIn: 'root'
})
export class GetsellersService {

  constructor() { }
  private readonly _HttpClient = inject(HttpClient)

  getAllSellers():Observable<ISeller[]>
  {
return this._HttpClient.get<ISeller[]>(`${environment.apiBaseUrl}/Seller`)
  }

getSellerWithItsProducts(id:string):Observable<any>
{
  return this._HttpClient.get(`${environment.apiBaseUrl}/Seller/${id}`)
} 

}

import { HttpClient } from '@angular/common/http'
import {inject, Injectable} from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from '../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class GetsellersService {

  constructor() { }
  private readonly _HttpClient = inject(HttpClient)

  getAllSellers():Observable<any>
  {
return this._HttpClient.get(`${environment.apiBaseUrl}/Seller`)
  }

getSellerWithItsProducts(id:string):Observable<any>
{
  return this._HttpClient.get(`${environment.apiBaseUrl}/Seller/${id}`)
} 

}

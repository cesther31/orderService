import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';


import { product } from '../models/product';

const Product_API = 'http://localhost:8080/api/products'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
      console.log(this.http);
  }

  createProduct(productData: product) {
    return this.http.post<product>(`${Product_API}`, productData);
  }

  getProduct(id: string) : Observable<product> {
    return this.http.get<product>(`${Product_API}/${id}`);
  }

  getProducts() : Observable<product[]> {
    return this.http.get<product[]>(Product_API);
}

}
import { Product } from './../model/Interface/product.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3000/products"
  pageSize = 10

  constructor( private http: HttpClient) { }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }

  readProduct(): Observable<Product[]> {
    // const url = `${this.baseUrl}?_limit=${this.pageSize}`;
    return this.http.get<Product[]>(this.baseUrl);
  }
}

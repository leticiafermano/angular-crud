import { Product } from './../model/Interface/product.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { MensagemSistema } from '../enum/mensagem-sistema.enum';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl = 'http://localhost:3000/products';

  constructor(
    private http: HttpClient,
    private snackbarService: SnackbarService
  ) {}

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map(obj => obj),
      catchError(erro => this.errorHandler(erro))
    );
  }

  errorHandler(erro: any): Observable<any> {
    this.snackbarService.openSnackBarCustom(MensagemSistema.MSG_ERRO, true);
    return EMPTY;
  }

  readProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(erro => this.errorHandler(erro))
    );
  }

  //CORRIGIR SNACKBAR 

  
  readeById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      map(obj => obj),
      catchError(erro => this.errorHandler(erro))
    );
  }

  updateProduct(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<Product>(url, product).pipe(
      map(obj => obj),
      catchError(erro => this.errorHandler(erro))
    );
  }

  deleteProduct(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Product>(url).pipe(
      map(obj => obj),
      catchError(erro => this.errorHandler(erro))
    );
  }
}

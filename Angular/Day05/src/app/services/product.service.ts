import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseURL: string = 'http://localhost:3005/products';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.baseURL);
  }
  getProductById(productId: string): Observable<IProduct> {
    console.log(productId);
    return this.http.get<IProduct>(`${this.baseURL}/${productId}`);
  }
  addNewProduct(product: any): Observable<IProduct> {
    return this.http.post<IProduct>(this.baseURL, product);
  }
  editNewProduct(productId: string, product: any): Observable<IProduct> {
    return this.http.put<IProduct>(`${this.baseURL}/${productId}`, product);
  }
  deleteProduct(productId: string): Observable<IProduct> {
    return this.http.delete<IProduct>(`${this.baseURL}/${productId}`);
  }
}

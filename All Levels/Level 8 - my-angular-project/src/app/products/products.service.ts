import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private API: string = "http://localhost:3000/Products";

  constructor(private http: HttpClient) { }

  create(product: Product) {
    return this.http.post<Product>(this.API, product);
  }

  read() {
    return this.http.get<Product[]>(this.API);
  }

  update(product: Product) {
    return this.http.put(`${this.API}/${product.id}`, product);
  }

  delete(id: number) {
    return this.http.delete(`${this.API}/${id}`);
  }

  searchProductById(id: number) {
    return this.http.get<Product>(`${this.API}/${id}`);
  }
}

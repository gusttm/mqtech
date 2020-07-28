import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // uri = 'http://localhost:4000/products';
  uri = 'http://gusttm-com.umbler.net/products';

  constructor(private http: HttpClient) { }

  addProduct(ProductCode, ProductName, ProductQnt, ProductUnit) {
    console.log(ProductCode, ProductName, ProductQnt, ProductUnit);
    const obj = {
      ProductCode,
      ProductName,
      ProductQnt,
      ProductUnit,
    };
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log(res));
  }

  getProducts() {
    return this
      .http
      .get(`${this.uri}`);
  }

  editProduct(id) {
    return this
      .http
      .get(`${this.uri}/edit/${id}`);
  }

  updateProduct(ProductCode, ProductName, ProductQnt, ProductUnit, id) {
    const obj = {
      ProductCode,
      ProductName,
      ProductQnt,
      ProductUnit,
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log(res));
  }

  deleteProduct(id) {
    return this
      .http
      .get(`${this.uri}/delete/${id}`);
  }
}

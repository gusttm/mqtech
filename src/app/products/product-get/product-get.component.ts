import { Component, OnInit } from '@angular/core';
import Product from '../model/Product';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})

export class ProductGetComponent implements OnInit {
  
  public paginaAtual = 1;

  products: Product[];
  constructor(private ps: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.ps
      .getProducts()
      .subscribe((data: Product[]) => {
        this.products = data;
    });
  }

  deleteProduct(id) {
    this.ps.deleteProduct(id).subscribe(res => {
      this.getProducts()
    });
  }
}

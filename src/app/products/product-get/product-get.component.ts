import { Component, OnInit } from '@angular/core';
import Product from '../model/Product';
import { ProductsService } from '../service/products.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})

export class ProductGetComponent implements OnInit {
  
  public paginaAtual = 1;
  products: Product[];
  err: any;

  constructor(private ps: ProductsService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.getProducts();
  }
  
  getProducts() {
    this.spinner.show();
    this.ps.getProducts().subscribe(
      (data: Product[]) => {
        this.products = data;
        this.spinner.hide();
      },
      (error: any) => {
        this.err = error;
        this.spinner.hide();
      }
    );
  }

  deleteProduct(id) {
    this.ps.deleteProduct(id).subscribe(res => {
      this.getProducts()
    });
  }
}

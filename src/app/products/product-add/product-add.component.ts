import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productForm: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private ps: ProductsService) {
    this.createForm();
  }

  createForm() {
    this.productForm = this.fb.group({
      ProductCode: ['', Validators.required ],
      ProductName: ['', Validators.required ],
      ProductQnt: ['', Validators.required ],
      ProductUnit: ['', Validators.required ]
    });
  }

  addProduct(ProductCode, ProductName, ProductQnt, ProductUnit) {
    this.ps.addProduct(parseInt(ProductCode), ProductName, parseInt(ProductQnt), ProductUnit);
  }

  ngOnInit() {
  }

}

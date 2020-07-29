import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  productForm: FormGroup;
  product: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private ps: ProductsService, private fb: FormBuilder) {
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

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.ps.editProduct(params.id).subscribe(res => {
          this.product = res;
      });
    });
  }

  updateProduct(ProductCode, ProductName, ProductQnt, ProductUnit) {
    this.route.params.subscribe(params => {
      this.ps.updateProduct(ProductCode, ProductName, parseInt(ProductQnt), ProductUnit, params.id);
      this.router.navigate(['/products']);
    });
  }
}

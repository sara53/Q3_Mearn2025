import { Component } from '@angular/core';
import { StaticProductService } from '../../../services/static-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  imports: [],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent {
  constructor(
    private productService: StaticProductService,
    private router: Router
  ) {}
  productHandler() {
    this.productService.addNewProduct({
      id: 1,
      name: 'New Product',
      price: 300,
      quantity: 10,
    });
    this.router.navigate(['/products']);
  }
}

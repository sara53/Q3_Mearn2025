import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
<<<<<<< HEAD
import { ProductService } from '../../../services/product.service';
=======
import { RealProductsService } from '../../../services/real-products.service';
>>>>>>> 29e0f6cb72afe192113447378f548be2104aa738
import { IProduct } from '../../../models/iproduct';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
<<<<<<< HEAD
  productId: any;
  product?: IProduct;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
=======
  productId!: any;
  product!: IProduct;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: RealProductsService
>>>>>>> 29e0f6cb72afe192113447378f548be2104aa738
  ) {}
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.productService.getProductById(this.productId).subscribe({
      next: (response) => (this.product = response),
<<<<<<< HEAD
=======
      error: (error) => error,
>>>>>>> 29e0f6cb72afe192113447378f548be2104aa738
    });
  }
}

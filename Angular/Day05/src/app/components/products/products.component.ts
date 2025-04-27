import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { StaticProductService } from '../../services/static-product.service';
import { IProduct } from '../../models/iproduct';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { ProductService } from '../../services/product.service';
=======
import { RealProductsService } from '../../services/real-products.service';
import { Subscribable, Subscription } from 'rxjs';
>>>>>>> 29e0f6cb72afe192113447378f548be2104aa738

@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit, OnDestroy {
  size!: string;
  category!: string;
  products: IProduct[] = [];
  x!: Subscription;
  constructor(
<<<<<<< HEAD
    private productServices: ProductService,
=======
    private productServices: RealProductsService,
>>>>>>> 29e0f6cb72afe192113447378f548be2104aa738
    private router: Router
  ) {}
  ngOnDestroy(): void {
    this.x.unsubscribe();
  }

  ngOnInit(): void {
<<<<<<< HEAD
    this.productServices.getAllProducts().subscribe({
      next: (response) => (this.products = response),
      complete: () => {},
      error: (error) => console.log(error),
    });
=======
    this.x = this.productServices.getAllProducts().subscribe({
      next: (response) => {
        this.products = response;
      },
      error: (error) => console.log(error),
    });
  }

  deleteHandler(productId: string) {
    this.productServices.deleteProduct(productId).subscribe({
      next: () => {
        this.products = this.products.filter(
          (product) => product.id != productId
        );
      },
    });
>>>>>>> 29e0f6cb72afe192113447378f548be2104aa738
  }

  filterBy() {
    this.router.navigate(['/products'], {
      queryParams: { size: this.size, category: this.category },
    });
  }

  deleteProductHandler(productId: string) {
    this.productServices.deleteProduct(productId).subscribe({
      next: (response) => {
        this.products = this.products.filter(
          (product) => product.id != productId
        );
      },
    });
  }
}

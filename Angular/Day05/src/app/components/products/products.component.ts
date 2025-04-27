import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { StaticProductService } from '../../services/static-product.service';
import { IProduct } from '../../models/iproduct';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  size!: string;
  category!: string;
  products!: IProduct[];
  constructor(
    private productServices: ProductService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.productServices.getAllProducts().subscribe({
      next: (response) => (this.products = response),
      complete: () => {},
      error: (error) => console.log(error),
    });
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

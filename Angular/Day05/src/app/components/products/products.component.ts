import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { StaticProductService } from '../../services/static-product.service';
import { IProduct } from '../../models/iproduct';
import { FormsModule } from '@angular/forms';

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
    private productServices: StaticProductService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.products = this.productServices.getALLProducts();
  }

  filterBy() {
    this.router.navigate(['/products'], {
      queryParams: { size: this.size, category: this.category },
    });
  }
}

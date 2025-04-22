import { Component } from '@angular/core';
import { ProductItemComponent } from './product-item/product-item.component';
import { IProduct } from '../../model/iproduct';

@Component({
  selector: 'app-products',
  imports: [ProductItemComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  trackName: string = 'SD';
  product: IProduct = { id: 1, name: 'Book', price: 400, quantity: 10 };

  getOffer() {
    // this.product = { ...this.product, price: 200 };
    this.product.price = 200; //
  }
}

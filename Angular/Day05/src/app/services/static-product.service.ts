import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class StaticProductService {
  products: IProduct[];
  constructor() {
    this.products = [
      {
<<<<<<< HEAD
        id: '1',
=======
        id: ' 1',
>>>>>>> 29e0f6cb72afe192113447378f548be2104aa738
        name: 'Book',
        price: 200,
        quantity: 10,
      },
      {
<<<<<<< HEAD
        id: '2',
=======
        id: ' 2',
>>>>>>> 29e0f6cb72afe192113447378f548be2104aa738
        name: 'Pen',
        price: 100,
        quantity: 60,
      },
      {
<<<<<<< HEAD
        id: ' 3',
=======
        id: '3',
>>>>>>> 29e0f6cb72afe192113447378f548be2104aa738
        name: 'Watch',
        price: 90,
        quantity: 40,
      },
    ];
  }

  getALLProducts(): IProduct[] {
    return this.products;
  }

  addNewProduct(product: any) {
    this.products.push(product);
  }

  //getProductByProduct()
  // edit
  // delete
}

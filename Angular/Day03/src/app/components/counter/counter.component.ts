import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  numberOfProducts: number = 0;

  @Output() onAddProduct = new EventEmitter<number>();

  addProduct() {
    this.numberOfProducts++;
    this.onAddProduct.emit(this.numberOfProducts);
  }
}

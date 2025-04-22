import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { IProduct } from '../../../model/iproduct';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy, AfterContentInit
{
  @ViewChild('elementRef') h3!: ElementRef;
  @Input() myProduct!: IProduct;
  @Input() ourTrackName!: string;

  previousValue: number = 0;
  constructor() {
    console.log('1-Ctor');
  }
  ngAfterContentInit(): void {
    console.log('After Content Init');
  }
  ngOnDestroy(): void {
    //console.log('onDestroy');
  }
  ngAfterViewInit(): void {
    console.log('after View Init');
    //console.log('h3', this.h3.nativeElement.textContent);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes');
    if (!changes['myProduct'].firstChange) {
      this.previousValue = changes['myProduct'].previousValue.price;
      console.log(this.previousValue);
    }
  }

  ngOnInit(): void {
    console.log('3-OnInit');
  }
}

// AfterContentInit -- SharedComponent

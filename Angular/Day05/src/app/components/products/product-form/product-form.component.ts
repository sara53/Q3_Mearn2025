import { Component, OnInit } from '@angular/core';
import { StaticProductService } from '../../../services/static-product.service';
import { ActivatedRoute, Router } from '@angular/router';
<<<<<<< HEAD
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductService } from '../../../services/product.service';
=======
import { RealProductsService } from '../../../services/real-products.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
>>>>>>> 29e0f6cb72afe192113447378f548be2104aa738

@Component({
  selector: 'app-product-form',
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent implements OnInit {
<<<<<<< HEAD
  productId!: string;
  productForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
  });
  constructor(
    private productService: ProductService,
=======
  productId: any;
  constructor(
    private productService: RealProductsService,
>>>>>>> 29e0f6cb72afe192113447378f548be2104aa738
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
<<<<<<< HEAD
    this.activatedRoute.params.subscribe((params) => {
      this.productId = params['id'];
      this.getName.setValue('');
      this.getPrice.setValue('');
      this.getQuantity.setValue('');
    });
    if (this.productId != '0') {
=======
    //this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.activatedRoute.params.subscribe({
      next: (params) => {
        this.productId = params['id'];
        this.getName.setValue('');
        this.getPrice.setValue('');
        this.getQuantity.setValue('');
      },
    });
    if (this.productId != 0) {
>>>>>>> 29e0f6cb72afe192113447378f548be2104aa738
      this.productService.getProductById(this.productId).subscribe({
        next: (response) => {
          this.getName.setValue(response.name);
          this.getPrice.setValue(response.price.toString());
          this.getQuantity.setValue(response.quantity.toString());
        },
      });
    }
  }
<<<<<<< HEAD
=======

  productForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    quantity: new FormControl(''),
  });

>>>>>>> 29e0f6cb72afe192113447378f548be2104aa738
  get getName() {
    return this.productForm.controls['name'];
  }
  get getPrice() {
    return this.productForm.controls['price'];
  }
  get getQuantity() {
    return this.productForm.controls['quantity'];
  }
<<<<<<< HEAD

  productHandler() {
    console.log(this.productForm.value);
    if (this.productForm.status == 'VALID') {
      if (this.productId == '0') {
        this.productService.addNewProduct(this.productForm.value).subscribe({
=======
  productHandler() {
    console.log(this.productForm.value);
    if (this.productForm.status == 'VALID') {
      if (this.productId == 0) {
        // add Product
        this.productService.addProduct(this.productForm.value).subscribe({
>>>>>>> 29e0f6cb72afe192113447378f548be2104aa738
          next: () => {
            this.router.navigate(['/products']);
          },
        });
      } else {
        this.productService
<<<<<<< HEAD
          .editNewProduct(this.productId, this.productForm.value)
=======
          .editProduct(this.productId, this.productForm.value)
>>>>>>> 29e0f6cb72afe192113447378f548be2104aa738
          .subscribe({
            next: () => {
              this.router.navigate(['/products']);
            },
          });
      }
<<<<<<< HEAD
=======
    } else {
      console.log('fix Errors');
>>>>>>> 29e0f6cb72afe192113447378f548be2104aa738
    }
  }
}

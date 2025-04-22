import { Component } from '@angular/core';

import { ContentComponent } from './components/content/content.component';
import { ProductsComponent } from './components/products/products.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ShowDataComponent } from './components/show-data/show-data.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

@Component({
  selector: 'app-root',
  imports: [
    ContentComponent,
    ProductsComponent,
    MoviesComponent,
    ShowDataComponent,
    ProductFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  trackName: string = '';
  getData(data: string) {
    this.trackName = data;
  }
}

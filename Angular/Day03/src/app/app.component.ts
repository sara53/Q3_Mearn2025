import { Component } from '@angular/core';
import { TestDirectivesComponent } from './components/attribute-directives/test-directives.component';
import { ContentComponent } from './components/interactions/content/content.component';
import { UsersComponent } from './components/interactions/users/users.component';
import { LoginComponent } from './components/interactions/login/login.component';
import { CounterComponent } from './components/counter/counter.component';

@Component({
  selector: 'app-root',
  imports: [
    TestDirectivesComponent,
    ContentComponent,
    UsersComponent,
    LoginComponent,
    CounterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  trackName: string = 'System Development';

  productCount: number = 0;
  dataFromChild!: { id: number; name: string; age: number };
  getData(data: any) {
    this.dataFromChild = data;
  }
  getProductCount(numberOfProducts: number) {
    this.productCount = numberOfProducts;
  }
}

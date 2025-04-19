import { Component } from '@angular/core';
import { TestOneWayBindingComponent } from './component/oneWayBinding/test-one-way-binding.component';
import { TestTwoWayBindingComponent } from './component/twoWayBinding/test-two-way-binding.component';
import { TestStructuralDirectivesComponent } from './component/StructuralDirectives/test-structural-directives.component';
import { HomeComponent } from './component/Home/home.component';

@Component({
  selector: 'app-root',
  imports: [TestStructuralDirectivesComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Day02';
}

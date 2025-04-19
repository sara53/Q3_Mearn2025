import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TestOneWayBindingComponent } from '../oneWayBinding/test-one-way-binding.component';

@Component({
  selector: 'app-test-structural-directives',
  imports: [CommonModule, TestOneWayBindingComponent],
  templateUrl: './test-structural-directives.component.html',
  styleUrl: './test-structural-directives.component.css',
})
export class TestStructuralDirectivesComponent {
  flag: boolean = true;
  color: string = 'green';
  toggle() {
    this.flag = !this.flag;
  }
  products: string[] = [];
}

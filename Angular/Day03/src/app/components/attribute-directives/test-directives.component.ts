import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScaleElementDirective } from '../../custom-directives/scale-element.directive';
import { AutoUpperCaseDirective } from '../../custom-directives/auto-upper-case.directive';

@Component({
  selector: 'app-test-directives',
  imports: [CommonModule, ScaleElementDirective, AutoUpperCaseDirective],
  templateUrl: './test-directives.component.html',
  styleUrl: './test-directives.component.css',
})
export class TestDirectivesComponent {
  flag: boolean = true;
  toggle() {
    this.flag = !this.flag;
  }

  itiTracks: string[] = ['Mearn', 'Dotnet', 'PHP', 'SD'];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-test-one-way-binding',
  imports: [],
  templateUrl: './test-one-way-binding.component.html',
  styleUrl: './test-one-way-binding.component.css',
})
export class TestOneWayBindingComponent {
  imgSrc1: string = '1.jpg';
  imgSrc2: string = '2.jpg';

  flag: boolean = false;
  trackName: string = 'Mearn Track';
  x: number = 1234;
  student?: { id: number; name: string } = { id: 1, name: 'Alaa' };
}

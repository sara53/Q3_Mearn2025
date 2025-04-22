import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TruncatePipe } from '../../custom-pipes/truncate.pipe';

@Component({
  selector: 'app-show-data',
  imports: [CommonModule, TruncatePipe],
  templateUrl: './show-data.component.html',
  styleUrl: './show-data.component.css',
})
export class ShowDataComponent {
  title: string = 'Mearn';
  price: number = 200;
  date: Date = new Date();
  text: string =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cum dolornisi veniam rerum enim inventore ad porro iste debitis aliquam voluptates,ipsa dolore omnis fugiat labore placeat maxime obcaecati.';
  obj: { id: number; name: string } = { id: 1, name: 'Ali' };
}

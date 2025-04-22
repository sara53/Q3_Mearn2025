import { Component } from '@angular/core';
import { SharedCardComponent } from '../../sharedComponents/shared-card/shared-card.component';

@Component({
  selector: 'app-movies',
  imports: [SharedCardComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent {}

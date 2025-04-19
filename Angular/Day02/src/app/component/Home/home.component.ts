import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  selectedTrack: string = 'All';
  itiTracks: { id: number; name: string; department: string }[] = [];

  filteredTracks: { id: number; name: string; department: string }[];
  constructor() {
    this.itiTracks = [
      {
        id: 1,
        name: 'UI/UX',
        department: 'Design',
      },
      {
        id: 2,
        name: 'Mearn',
        department: 'Cross Platform',
      },
      {
        id: 3,
        name: 'Front',
        department: 'Cross Platform',
      },
      {
        id: 4,
        name: 'PD',
        department: 'Development',
      },
      {
        id: 5,
        name: 'OS',
        department: 'Development',
      },
    ];
    this.filteredTracks = this.itiTracks;
  }
  filterAllTracks() {
    this.filteredTracks =
      this.selectedTrack === 'All'
        ? this.itiTracks
        : this.itiTracks.filter(
            (track) => track.department === this.selectedTrack
          );
  }
}

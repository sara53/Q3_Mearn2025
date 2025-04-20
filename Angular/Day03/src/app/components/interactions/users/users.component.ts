import { Component } from '@angular/core';
import { UserDetailsComponent } from './user-details/user-details.component';

@Component({
  selector: 'app-users',
  imports: [UserDetailsComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  users: { id: number; name: string }[] = [
    { id: 1, name: 'ali' },
    { id: 2, name: 'Ahmed' },
    { id: 3, name: 'Hoda' },
  ];
}

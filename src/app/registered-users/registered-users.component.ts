import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.css'],
})
export class RegisteredUsersComponent implements OnInit {
  registeredUsers: any[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.fetchRegisteredUsers();
  }

  fetchRegisteredUsers() {
    this.authService.checkRegisteredUsers().subscribe(
      (data: any) => {
        this.registeredUsers = data;
        console.log(this.registeredUsers,'jjjj')
      },
      (error) => {
        console.error('Error fetching registered users:', error);
      }
    );
  }
}

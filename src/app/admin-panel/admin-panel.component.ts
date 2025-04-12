import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent implements OnInit {
  isAdmin!: boolean;
  userCount: any = 0;
  registeredUsers: any[] = [];
  constructor(private router: Router, private authService: AuthService) {}
  ngOnInit(): void {
    this.isAdmin = this.authService.isUserAdmin();
  }

  goTocreateUser(): void {
    this.router.navigate(['/register']);
  }

  goToGetListing(): void {
    this.router.navigate(['/get-listing']);
  }
  addNew() {
    this.router.navigate(['/add-flow']);
  }
  signOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  checkRegisteredUsers() {
    this.router.navigate(['/registered-users']);
  }
  
}

import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-new-record',
  templateUrl: './add-new-record.component.html',
  styleUrls: ['./add-new-record.component.css'],
})
export class AddNewRecordComponent {
  constructor(private router: Router) {}
  addNew() {
    // Add logic to save patient data to the backend
    // After successful save, implement the "Add New" functionality
    this.router.navigate(['/add-patient']);
  }
}

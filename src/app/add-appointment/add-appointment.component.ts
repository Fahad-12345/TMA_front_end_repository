import { SharedServiceService } from './../shared-service.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { AppointmentService } from '../appointment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css'],
})
export class AddAppointmentComponent implements OnInit {
  successMessage: string | null = null;
  errorMessage: string | null = null;
  @Output() appointmentSubmitted: EventEmitter<any> = new EventEmitter();
  inventoryForm: any = {
    textbookID:'',
    quantityAvailable:'',
    quantityOnLoan:''
  };
  
  constructor(
    private appointmentService: AppointmentService,
    private router: Router,
    private sharedService: SharedServiceService
  ) {}

  ngOnInit() {
    // this.getAppointmentTypes();
    // this.getSpecialities();
    // this.getDoctors();
    // this.getPracticeLocations();
    this.getNewTextbookId();
  }
  getNewTextbookId() {
    const newtextbookId = this.sharedService.getNewtextbookId();
    console.log(newtextbookId,'eeee')
    if (newtextbookId) {
      this.inventoryForm.textbookID = newtextbookId;
    }
  }

  addInventory() {
    this.appointmentService.addInventory(this.inventoryForm).subscribe(
      (response) => {
        console.log('Inventory added successfully:', response);
        this.successMessage = 'Inventory added successfully';
        this.errorMessage = null;
        this.appointmentSubmitted.emit();
        setTimeout(() => {
          this.router.navigate(['/admin-panel']);
        }, 2000);
      },
      (error) => {
        console.error('Failed to add Inventory:', error);
        this.successMessage = null;
        this.errorMessage = 'Failed to add Inventory';
      }
    );
  }
  // getAppointmentTypes() {
  //   this.appointmentService.getAppointmentTypes().subscribe(
  //     (response: any) => {
  //       this.appointmentType = response.map((location: any) => location.Name);
  //     },
  //     (error: any) => {
  //       console.error('Failed to fetch appointment types:', error);
  //     }
  //   );
  // }

  // getSpecialities() {
  //   this.appointmentService.getSpecialities().subscribe(
  //     (response: any) => {
  //       this.Speciality = response.map((location: any) => location.Name);
  //     },
  //     (error: any) => {
  //       console.error('Failed to fetch specialities:', error);
  //     }
  //   );
  // }

  // getDoctors() {
  //   this.appointmentService.getDoctors().subscribe(
  //     (response: any) => {
  //       this.Doctor = response.map((location: any) => location.Name);
  //     },
  //     (error: any) => {
  //       console.error('Failed to fetch doctors:', error);
  //     }
  //   );
  // }

  // getPracticeLocations() {
  //   this.appointmentService.getPracticeLocations().subscribe(
  //     (response: any) => {
  //       this.practiceLocation = response.map((location: any) => location.Name);
  //     },
  //     (error: any) => {
  //       console.error('Failed to fetch practice locations:', error);
  //     }
  //   );
  // }
}

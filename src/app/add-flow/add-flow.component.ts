import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-add-flow',
  templateUrl: './add-flow.component.html',
  styleUrls: ['./add-flow.component.css'],
})
export class AddFlowComponent {
  patientSubmitted: boolean = false;
  caseSubmitted: boolean = false;
  currentStep = 0;
  constructor(private router: Router, private authService: AuthService) {}

  onPatientSubmitted() {
    this.patientSubmitted = true;
    this.currentStep = 1;
  }

  onCaseSubmitted() {
    this.caseSubmitted = true;
    this.currentStep = 2;
  }

  onAppointmentSubmitted() {
    this.currentStep = 3;
  }
  goBack() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  continue() {
    if (this.currentStep === 1 && this.patientSubmitted) {
      this.currentStep = 2;
    } else if (this.currentStep === 2 && this.caseSubmitted) {
      this.currentStep = 3;
    } else if (this.currentStep > 3) {
      this.router.navigate(['/admin-panel']);
    }
  }
}

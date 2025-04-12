import { SharedServiceService } from './../shared-service.service';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { courseService } from '../course.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css'],
})
export class AddPatientComponent implements OnInit {
  successMessage: string | null = null;
  errorMessage: string | null = null;
  @Output() patientSubmitted: EventEmitter<any> = new EventEmitter();
  courseForm: any = {
    courseName: '',
    courseCode: '',
    semester: '',
    year: '',
  };
  constructor(
    private courseService: courseService,
    private router: Router,
    private route: ActivatedRoute,
    private sharedService: SharedServiceService
  ) {}
  ngOnInit(): void {}

  addCourse() {
    console.log('Course Form Data:', this.courseForm);

    this.courseService.addCourse(this.courseForm).subscribe(
      (response: any) => {
        console.log('Course added successfully:', response);
        const courseID1 = response.courseID;
        console.log(courseID1,'QQQQQQQQQ')
        this.sharedService.setNewCourseId(courseID1);
        this.successMessage = 'Course added successfully';
        this.errorMessage = null;
        this.patientSubmitted.emit();
      },
      (error: any) => {
        console.log('Failed to add Course', error);
        this.successMessage = null;
        this.errorMessage = 'Failed to add Course';
      }
    );
  }

  // Get all patients
  getCourses() {
    this.courseService.getallcourses().subscribe(
      (response: any) => {
        console.log('Patients:', response);
      },
      (error: any) => {
        console.error('Failed to fetch patients:', error);
      }
    );
  }

  // Get a patient by ID
  // getPatientsById(id: number) {
  //   this.patientService.getPatientsById(id).subscribe(
  //     (response: any) => {
  //       console.log('Patient with ID:', response);
  //     },
  //     (error:any) => {
  //       console.error('Failed to fetch patient:', error);
  //     }
  //   );
  // }

  // Update a patient
  updateCourse(id: number, updatedPatientData: any) {
    this.courseService.updateCourse(id, updatedPatientData).subscribe(
      (response) => {
        console.log('Patient updated successfully:', response);
      },
      (error) => {
        console.error('Failed to update patient:', error);
      }
    );
  }

  // Delete a patient
  deleteCourse(id: number) {
    this.courseService.deleteCourse(id).subscribe(
      (response) => {
        console.log('Course deleted successfully', response);
      },
      (error) => {
        console.error('Failed to delete Course:', error);
      }
    );
  }
}

import { courseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { textbookService } from '../case.service';
import { AppointmentService } from '../appointment.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-listings',
  templateUrl: './edit-listings.component.html',
  styleUrls: ['./edit-listings.component.css'],
})
export class EditListingsComponent implements OnInit {
  public isPatientDataSubmitted = false;
  public isCaseDataSubmitted = false;
  public isAppointmentDataSubmitted = false;

  public patientDataSuccessMessage = '';
  public patientDataErrorMessage = '';

  public caseDataSuccessMessage = '';
  public caseDataErrorMessage = '';

  public appointmentDataSuccessMessage = '';
  public appointmentDataErrorMessage = '';
  courseID: any;
  textbookId: any;
  InventoryId: any;
  courseData: any;
  textbookData: any;
  InventoryData: any;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private courseService: courseService,
    private textbookService : textbookService,
    private appointmentService: AppointmentService
  ) {}
  ngOnInit(): void {}

  fetchCourseData() {


   this.courseData = this.courseService.getcourseData();
   this.courseID = this.courseData.courseID
    console.log(this.courseData,'EEDITTTTTTT')

   return this.courseData
    // this.courseID = this.courseService.getcourseData();
    // this.courseID = this.courseService.getcoursesById(this.courseID);
    // console.log(this.courseID,'111111111111');
    // this.http
    //   .get('http://localhost:8080/api/courses/' + this.courseID)
    //   .subscribe((results) => {
    //     this.courseData = results;
    //     console.log(this.courseData);
    //   });
  }
  fetchTextbookData() {
    this.textbookData = this.textbookService.getTextbookdata();
    console.log(this.textbookData,'ddddddd')
   this.textbookId = this.textbookData.textbookID
    console.log(this.textbookId,'EEDITTTTTTT')

   return this.textbookData
    // this.textbookId = this.textbookService.getTextbookdata();
    // console.log(this.textbookId,'textbookID');
    // this.http
    //   .get('http://localhost:8080/api/textbooks/' + this.textbookId)
    //   .subscribe((results) => {
    //     this.textbookData = results;
    //     console.log(this.textbookData);
    //   });
  }

  fetchInventoryData() {
    this.InventoryData = this.appointmentService.getInventoryData();
    this.InventoryId = this.InventoryData.InventoryID
     console.log(this.InventoryData,'EEDITTTTTTT')
    return this.InventoryData
  }

  UpdateCourseData() {

    this.courseService
      .updateCourse(this.courseID, this.courseData)
      .subscribe(
        (response) => {
          this.courseData = response;
          this.isPatientDataSubmitted = true;
          this.patientDataSuccessMessage =
            'Course data submitted successfully.';
          this.patientDataErrorMessage = '';
          console.log('course updated successfully', response);
        },
        (error) => {
          this.isPatientDataSubmitted = false;
          this.patientDataErrorMessage = 'Error submitting course data.';
          this.patientDataSuccessMessage = '';
          console.error('Error updating course', error);
        }
      );
  }
  UpdatetextbookData() {
    this.textbookService.updateTextbook(this.textbookId, this.textbookData).subscribe(
      (response) => {
        this.textbookData = response;
        this.isCaseDataSubmitted = true;
        this.caseDataSuccessMessage = 'Textbook data submitted successfully.';
        this.caseDataErrorMessage = '';
        console.log('textbook updated successfully', response);
      },
      (error: any) => {
        console.error('Error updating textbook ', error);
        this.isCaseDataSubmitted = false;
        this.caseDataErrorMessage = 'Error submitting textbook data.';
        this.caseDataSuccessMessage = '';
      }
    );
  }
  UpdateInventoryData() {
    this.appointmentService
      .updateInventory(this.InventoryId , this.InventoryData)
      .subscribe(
        (response) => {
          this.InventoryData = response;
          this.isAppointmentDataSubmitted = true;
          this.appointmentDataSuccessMessage =
            'Inventory data submitted Successfully';
          this.appointmentDataErrorMessage = '';
          console.log('Inventory updated successfully', response);
        },
        (error) => {
          this.isAppointmentDataSubmitted = false;
          this.appointmentDataErrorMessage =
            'Error submitting inventory data.';
          this.appointmentDataSuccessMessage = '';
          console.error('Error updating inventory', error);
        }
      );
  }
}

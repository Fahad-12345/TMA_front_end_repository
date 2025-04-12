import { textbookService } from './../case.service';
import { Component, OnInit } from '@angular/core';
import { ListingService } from '../listing.service';

import { Router } from '@angular/router';
import { HttpParams, HttpClient } from '@angular/common/http';
import { courseService } from '../course.service';
import { AppointmentService } from '../appointment.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-get-listing',
  templateUrl: './get-listing.component.html',
  styleUrls: ['./get-listing.component.css'],
})
export class GetListingComponent implements OnInit {
  listings: any[] = [];
  page: number = 1;
  pageSize: number = 20;
  courseID:any;
  filters: any = {
    course_id: '',
    textbook_id:'',
    inventory_id:'',
    course_name: '',
    assigned_book: '',
    availabilityStatus: '',
    textbookType: '',
  };

  constructor(
    private listingService: ListingService,
    public authService: AuthService,
    private courseService:courseService,
    private caseService: textbookService,
    private appointmentService: AppointmentService,

    private router: Router
  ) {}
  ngOnInit() {
    this.getListings();
  }
  areFiltersApplied(): boolean {
    return Object.values(this.filters).some(
      (value) => value !== null && value !== ''
    );
  }

  getListings() {
    console.log(this.filters);
    this.listingService
      .getListingsWithFilters(this.page, this.pageSize, this.filters)
      .subscribe(
        (response: any) => {
          this.listings = response;
          console.log(this.listings);
        },
        (error: any) => {
          console.log('Error getting listing', error);
        }
      );
  }
  applyFilters() {
    this.getListings();
    console.log(this.getListings);
  }
  resetFilters() {
    this.filters = {
      course_id: '',
      course_name: '',
      assigned_book: '',
      availabilityStatus: '',
      textbookType: '',
    };
    this.getListings();
  }
 
   

  editListing(course_id:number , textbook_id: number , inventory_id: number) {
    // const courseID = this.listings.map(item => item.course_id);
    // const textbookID = this.listings.map(item => item.textbook_id);
    // const inventoryID = this.listings.map(item => item.inventory_id);
    try {
      // console.log(courseID, textbookID , inventoryID ,'rrrrrrrr');
      console.log(course_id, textbook_id , inventory_id ,'MMMMM');
    
      this.courseService.getcoursesById(course_id);
      this.caseService.getTextbooksById(textbook_id);
      this.appointmentService.getInventoriesById(inventory_id);

      this.router.navigate(['/edit-listings'], {});
    } catch (error) {
      console.log('Error getting course details', error);
    }
  }

  deleteListing(courseID: number) {
    if (
      confirm(
        'Are you sure you want to delete this course and related textbooks?'
      )
    ) {
      
      this.courseService.deleteCourse(courseID).subscribe(
        (response: any) => {
          console.log('course deleted successfully', response);
          this.listings = this.listings.filter(
            (course) => course.id !== courseID
          );
          console.log(this.listings,'listingssss')
          this.getListings();
        },
        (error: any) => {
          console.error('Failed to delete course', error);
        }
      );
    }
  }
}

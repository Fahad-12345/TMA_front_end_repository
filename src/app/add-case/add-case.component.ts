// import { PatientService } from '../course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { textbookService } from '../case.service';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-add-case',
  templateUrl: './add-case.component.html',
  styleUrls: ['./add-case.component.css'],
})
export class AddCaseComponent implements OnInit {
  successMessage: string | null = null;
  errorMessage: string | null = null;
  @Output() caseSubmitted: EventEmitter<any> = new EventEmitter();
  textbookForm: any = {
    courseID: '',
    textBooktitle: '',
    author: '',
    ISBN: '',
    edition: '',
    date_of_publish: '',
    latest_version:'',
    old_version:'',
    textbookType:''
  };
  

  constructor(
    private textbookService: textbookService,
    private route: ActivatedRoute,
    private sharedService: SharedServiceService
  ) {}

  ngOnInit() {
    this.getNewCourseId();
  }
  getNewCourseId() {
    const newCourseId = this.sharedService.getNewCourseId();
    if (newCourseId) {
      this.textbookForm.courseID = newCourseId;
    }
  }
  addtextbook() {
    // Map textbookType to e_book and hard_copy values based on the selection
    const textbookData = {
      ...this.textbookForm,
      e_book: this.textbookForm.textbookType === 'ebook' || this.textbookForm.textbookType === 'both',
      hard_copy: this.textbookForm.textbookType === 'hardcopy' || this.textbookForm.textbookType === 'both'
    };

    console.log('textbook data to be submitted:', textbookData);
    this.textbookService.addtextbook(textbookData).subscribe(
      (response) => {
        console.log('textbook added successfully:', response);
        const textbookId = response;
        this.sharedService.setNewTextbookId(textbookId);
        this.successMessage = 'textbook added successfully';
        this.errorMessage = null;

        this.caseSubmitted.emit();
      },
      (error) => {
        console.error('Failed to add textbook:', error);
        this.successMessage = null;
        this.errorMessage = 'Failed to add textbook';
      }
    );
  }  
}

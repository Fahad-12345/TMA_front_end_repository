import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedServiceService {
  courseId: any;
  textbookId: any;
  private newPatientIdSubject = new Subject<any>();

  setNewCourseId(Id: any) {
    this.courseId = Id;
    console.log(this.courseId,'DDDDDDDDDD');
  }

  getNewCourseId() {
    return this.courseId;
  }
  setNewTextbookId(id: any) {
    this.textbookId = id;
    console.log(this.textbookId,'TTTTTTTTTTTTTTTTT');
  }
  getNewtextbookId() {
    return this.textbookId.textbookID;
  }
}

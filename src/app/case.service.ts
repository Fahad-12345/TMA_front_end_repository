import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class textbookService {
  textbookData: any;
  private apiUrl = 'http://localhost:8080/api/textbooks/';

  constructor(private http: HttpClient) {}

  addtextbook(textbookData: any) {
    console.log(textbookData,'ddddd')
    return this.http.post(this.apiUrl, textbookData);
  }
  gettextbook() {
    return this.http.get(this.apiUrl);
  }
  getTextbooksById(textbookId: number) {
    const url = `${this.apiUrl}${textbookId}`;
    console.log(url,'urllll')
    this.http.get(url).subscribe(data => {
          this.textbookData = data; // Store the fetched data
          console.log(this.textbookData, 'Fetched textbook Data');
      });
    this.textbookData = textbookId;
    //return (this.caseData = caseId);
    //return this.http.get(url);




  //   const url = `${this.apiUrl}${courseID}`;
  //   console.log(url,'urllll')
  //   this.http.get(url).subscribe(data => {
  //     this.courseData = data; // Store the fetched data
  //     console.log(this.courseData, 'Fetched Course Data');
  // });
  }
  getTextbookdata() {
    const  resultdata = this.textbookData;
    console.log(resultdata,'resulttttt')
    return resultdata;
  }
  updateTextbook(id: number, CaseData: any) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, CaseData);
  }
  deleteTextbook(id: number) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}

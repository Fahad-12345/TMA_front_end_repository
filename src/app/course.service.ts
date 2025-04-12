import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class courseService {
  courseData: any;
  private apiUrl = 'http://localhost:8080/api/courses/';
  constructor(private http: HttpClient) {}
  addCourse(courseData: any) {
    return this.http.post(this.apiUrl, courseData);
  }
  getallcourses() {
    return this.http.get(this.apiUrl);
  }
  getcoursesById(courseID: any) {
    const url = `${this.apiUrl}${courseID}`;
    console.log(url,'urllll')
    this.http.get(url).subscribe(data => {
      this.courseData = data; // Store the fetched data
      console.log(this.courseData, 'Fetched Course Data');
  });
  }
  getcourseData() {
    const  resultdata = this.courseData;
    console.log(resultdata,'resulttttt')
    return resultdata;
    // return this.courseData;
  }
  updateCourse(id: number, courseData : any) {
    const url = `${this.apiUrl}${id}`;
    console.log(url,'rrrr')
    return this.http.put(url, courseData);
  }
  deleteCourse(id: number) {
    const url = `${this.apiUrl}${id}`;
    console.log('service', url);
    return this.http.delete(url);
  }
}

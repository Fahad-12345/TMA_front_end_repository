import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ListingService {
  private apiurl = `http://localhost:8080/api`;
  constructor(private http: HttpClient) {}

  // Function to get listings with filters
  getListingsWithFilters(page: number, pageSize: number, filters: any) {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());

    // Loop through the filters and add them as query parameters
    for (const key of Object.keys(filters)) {
      if (filters[key]) {
        params = params.set(key, filters[key]);
      }
    }
    const url = `${this.apiurl}/courses/Listing`;

    return this.http.get(url, { params });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private apiUrl = 'http://localhost:8080/api/inventories/';
  InventoryData: any;
  constructor(private http: HttpClient) {}

  // getAppointmentTypes() {
  //   return this.http.get(`${this.apiUrl}getAppointmentTypes`);
  // }

  // getSpecialities() {
  //   return this.http.get(`${this.apiUrl}getSpecialities`);
  // }

  // getDoctors() {
  //   return this.http.get(`${this.apiUrl}getDoctor`);
  // }

  // getPracticeLocations() {
  //   return this.http.get(`${this.apiUrl}getPracticeLocations`);
  // }
  addInventory(AppointmentData: any) {
    return this.http.post(this.apiUrl, AppointmentData);
  }
  getInventories() {
    return this.http.get(this.apiUrl);
  }
  getInventoriesById(inventoryId: number) {
    const url = `${this.apiUrl}${inventoryId}`;
    console.log(url,'urllll')
    this.http.get(url).subscribe(data => {
          this.InventoryData = data; // Store the fetched data
          console.log(this.InventoryData, 'Fetched Inventory Data');
      });
    this.InventoryData = inventoryId;
    
  }
  getInventoryData() {
    return this.InventoryData;
  }
  updateInventory(AppointentId: number, appointmentData: any) {
    const url = `${this.apiUrl}${AppointentId}`;
    return this.http.put(url, appointmentData);
  }
  deleteInventory(id: number) {
    const url = `${this.apiUrl}${id}`;
    return this.http.delete(url);
  }
}

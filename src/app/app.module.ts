import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { GetListingComponent } from './get-listing/get-listing.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { AddFlowComponent } from './add-flow/add-flow.component';
import { AddNewRecordComponent } from './add-new-record/add-new-record.component';
import { AddCaseComponent } from './add-case/add-case.component';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';
import { EditListingsComponent } from './edit-listings/edit-listings.component';
import { HeaderComponent } from './shared/header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    GetListingComponent,
    AdminPanelComponent,
    AddPatientComponent,
    AddCaseComponent,
    AddAppointmentComponent,
    AddFlowComponent,
    AddNewRecordComponent,
    RegisteredUsersComponent,
    EditListingsComponent,
    HeaderComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule,
    AngularFireAuthModule,
    StoreModule,
    EffectsModule,
    TranslateModule,
    HttpClientModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}

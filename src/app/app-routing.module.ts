import { AutoLoginGuard } from './auto-login.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { GetListingComponent } from './get-listing/get-listing.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { AddCaseComponent } from './add-case/add-case.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { AddNewRecordComponent } from './add-new-record/add-new-record.component';
import { AddFlowComponent } from './add-flow/add-flow.component';
import { AuthGuard } from './AUthGuard';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';
import { EditListingsComponent } from './edit-listings/edit-listings.component';

import { AdminAuthGuard } from './AuthadminGuard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin-panel',
    component: AdminPanelComponent,
    canActivate: [AuthGuard, AutoLoginGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthGuard, AdminAuthGuard, AutoLoginGuard],
  },

  {
    path: 'get-listing',
    component: GetListingComponent,
    canActivate: [AuthGuard, AutoLoginGuard],
  },
  {
    path: 'edit-listings',
    component: EditListingsComponent,
    canActivate: [AuthGuard, AdminAuthGuard, AutoLoginGuard],
  },
  {
    path: 'add-new-record',
    component: AddNewRecordComponent,
    canActivate: [AuthGuard, AdminAuthGuard, AutoLoginGuard],
  },
  {
    path: 'add-flow',
    component: AddFlowComponent,
    canActivate: [AuthGuard, AdminAuthGuard, AutoLoginGuard],
  },
  {
    path: 'add-patient',
    component: AddPatientComponent,
    canActivate: [AuthGuard, AdminAuthGuard, AutoLoginGuard],
  },
  {
    path: 'add-case',
    component: AddCaseComponent,
    canActivate: [AuthGuard, AdminAuthGuard, AutoLoginGuard],
  },
  {
    path: 'add-appointment',
    component: AddAppointmentComponent,
    canActivate: [AuthGuard, AdminAuthGuard, AutoLoginGuard],
  },
  {
    path: 'registered-users',
    component: RegisteredUsersComponent,
    canActivate: [AuthGuard, AutoLoginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

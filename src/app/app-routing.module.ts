import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes} from '@angular/router';
import {PatientsComponent} from './patients/patients.component';
import {PatientDetailComponent} from './patient-detail/patient-detail.component';
import {PatientAddComponent} from './patient-add/patient-add.component';
import {PatientEditComponent} from './patient-edit/patient-edit.component';

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ]
})
export class AppRoutingModule {
    const;
    routes: Routes = [
        {
            path: 'patients',
            component: PatientsComponent,
            data: {title: 'La liste des patients'}
        },
        {
            path: 'patient-details/:id',
            component: PatientDetailComponent,
            data: {title: 'Details du patient'}
        },
        {
            path: 'patient-add',
            component: PatientAddComponent,
            data: {title: 'Add Patient'}
        },
        {
            path: 'Patient-edit/:id',
            component: PatientEditComponent,
            data: {title: 'Edit Patient'}
        },
        {
            path: '',
            redirectTo: '/Patients',
            pathMatch: 'full'
        }
    ];

}

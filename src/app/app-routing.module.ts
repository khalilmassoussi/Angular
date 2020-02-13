import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PatientsComponent} from './patients/patients.component';
import {PatientDetailComponent} from './patient-detail/patient-detail.component';
import {PatientAddComponent} from './patient-add/patient-add.component';
import {PatientEditComponent} from './patient-edit/patient-edit.component';

const routes: Routes = [
    {
        path: 'patients',
        component: PatientsComponent,
        data: {title: 'List of patients'}
    },
    {
        path: 'patient-details/:id',
        component: PatientDetailComponent,
        data: {title: 'patient Details'}
    },
    {
        path: 'patient-add',
        component: PatientAddComponent,
        data: {title: 'Add patient'}
    },
    {
        path: 'patient-edit/:id',
        component: PatientEditComponent,
        data: {title: 'Edit patient'}
    },
    {
        path: '',
        redirectTo: '/patients',
        pathMatch: 'full'
    }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {


}

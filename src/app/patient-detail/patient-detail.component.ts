import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../api.service';
import {Patient} from '../patient';

@Component({
    selector: 'app-patient-detail',
    templateUrl: './patient-detail.component.html',
    styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {

    constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) {
    }

    patient: Patient = {id: null, Nom: '', Prenom: '', NumTel: null, adress: null, BirthDate: null, isActive: null};
    isLoadingResults = true;

    ngOnInit() {
        this.getPatientDetails(this.route.snapshot.params['id']);
    }

    getPatientDetails(id) {
        this.api.getPatient(id)
            .subscribe(data => {
                this.patient = data;
                console.log(this.patient);
                this.isLoadingResults = false;
            });
    }
}

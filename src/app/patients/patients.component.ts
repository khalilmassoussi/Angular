import {Component, OnInit} from '@angular/core';
import {Patient} from '../patient';
import {ApiService} from '../api.service';

@Component({
    selector: 'app-patients',
    templateUrl: './patients.component.html',
    styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
    displayedColumns: string[] = ['Nom', 'Prenom', 'NumTel', 'adress', 'BirthDate', 'isActive'];
    data: Patient[] = [];
    isLoadingResults = true;

    constructor(private api: ApiService) {
    }

    ngOnInit() {
        this.api.getPatients()
            .subscribe(res => {
                this.data = res;
                console.log(this.data);
                this.isLoadingResults = false;
            }, err => {
                console.log(err);
                this.isLoadingResults = false;
            });
    }

}

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
    selector: 'app-patient-add',
    templateUrl: './patient-add.component.html',
    styleUrls: ['./patient-add.component.css']
})
export class PatientAddComponent implements OnInit {

    constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) {
    }

    productForm: FormGroup;
    name: string = '';
    Aftername: string = '';
    Phone: number = null;
    Address: string = null;
    BirthDate: Date = null;
    isActive: boolean = null;
    isLoadingResults = false;

    ngOnInit() {
        this.productForm = this.formBuilder.group({
            Nom: [null, Validators.required],
            Prenom: [null, Validators.required],
            NumTel: [null, Validators.required],
            adress: [null, Validators.required],
            BirthDate: [null, Validators.required],
            isActive: [null, Validators.required]
        });
    }

    onFormSubmit(form: NgForm) {
        this.isLoadingResults = true;
        this.api.addPatient(form)
            .subscribe(res => {
                let id = res['_id'];
                this.isLoadingResults = false;
                this.router.navigate(['/product-details', id]);
            }, (err) => {
                console.log(err);
                this.isLoadingResults = false;
            });
    }
}

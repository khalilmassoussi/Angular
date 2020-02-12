import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Patient} from './patient';
import {catchError, tap} from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:5000/patients';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) {
    }

    getPatients(): Observable<Patient[]> {
        return this.http.get<Patient[]>(apiUrl)
            .pipe(
                tap(heroes => console.log('fetched Patients')),
                catchError(this.handleError('getPatients', []))
            );
    }

    getPatient(id: number): Observable<Patient> {
        const url = `${apiUrl}/${id}`;
        return this.http.get<Patient>(url).pipe(
            tap(_ => console.log(`fetched Patient id=${id}`)),
            catchError(this.handleError<Patient>(`getPatient id=${id}`))
        );
    }

    addPatient(Patient): Observable<Patient> {
        return this.http.post<Patient>(apiUrl, Patient, httpOptions).pipe(
            tap((Patient: Patient) => console.log(`added Patient w/ id=${Patient.id}`)),
            catchError(this.handleError<Patient>('addPatient'))
        );
    }

    updatePatient(id, Patient): Observable<any> {
        const url = `${apiUrl}/${id}`;
        return this.http.put(url, Patient, httpOptions).pipe(
            tap(_ => console.log(`updated Patient id=${id}`)),
            catchError(this.handleError<any>('updatePatient'))
        );
    }

    deletePatient(id): Observable<Patient> {
        const url = `${apiUrl}/${id}`;

        return this.http.delete<Patient>(url, httpOptions).pipe(
            tap(_ => console.log(`deleted Patient id=${id}`)),
            catchError(this.handleError<Patient>('deletePatient'))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}

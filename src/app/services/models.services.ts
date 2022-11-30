import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
    providedIn: 'root'
})
export class ModelsService {
    constructor(private http: HttpClient) { }
    getModules(): Observable<any> {
        return this.http.get(`${environment.API_URL}/architecture/list?page=1&size=50`, httpOptions);
    }

    getSolutions(name: string): Observable<any> {
        return this.http.get(`${environment.API_URL}/solutions/list?model_name=${name}&page=1&size=50`, httpOptions);
    }

    getExperiments(): Observable<any> {
        return this.http.get(`${environment.API_URL}/experiment/list?page=1&size=50`, httpOptions);
    }

    getSdks(): Observable<any> {
        return this.http.get(`${environment.API_URL}/sdk/list?page=1&size=50`, httpOptions);
    }

    createExperiment(data: any): Observable<any> {
        return this.http.post(`${environment.API_URL}/experiment/create`, data, httpOptions);
    }

}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  urlApi = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  public getData(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }

  public sendData(data: string): Observable<any> {
    return this.http.post<any>(this.urlApi, { data });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginserviceService {
  name: string = '';
  pass: string = '';
  constructor(private http: HttpClient) {}

  addlogin(a: string, d: string = 'mm') {
    this.name = a;
    this.pass = d;
    console.log(this.name, this.pass, 'noarray');
  }
  addloginbyarray(cred: [string, string]): void {
    this.name = cred[0];
    this.pass = cred[1];
    console.log(this.name, this.pass, cred, 'array');
  }
  login(): Observable<any> {
    try {
      if (false) {
        return this.http.get<any>('');
      } else {
        return of({ id: '999' });
      }
    } catch {
      return of('error');
    }
  }
}

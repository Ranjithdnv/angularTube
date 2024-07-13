import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginserviceService implements OnInit {
  name: string | null = localStorage.getItem('userogin');
  pass: string = '';
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    const userString: string | null = localStorage.getItem('userogin');
    console.log('uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu8888888888');
    //  let name: string = '';

    if (userString) {
      try {
        const user = JSON.parse(userString);
        console.log(user);
        this.name = user.name || '';
        console.log(this.name);
      } catch (error) {
        console.error('Error parsing user from localStorage:', error);
      }
    }
  }

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

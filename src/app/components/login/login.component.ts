import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginserviceService } from '../../services/loginservice.service';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginName: string = '';
  loginPassword: string = '';
  registerName: string = '';
  registerPassword: string = '';
  constructor(
    private loginservice: LoginserviceService,
    private router: Router
  ) {}

  // canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
  //   if (this.loginName) {
  //     console.log('ooooooooooooooooooooooooooooooooooo', this.loginName);
  //     return confirm(
  //       `You name  ${this.loginName} your pass ${this.loginPassword}`
  //     );
  //   }
  //   return true;
  // }

  onLogin() {
    console.log('Login:', this.loginName, this.loginPassword);
    //  this.loginservice.addlogin('a', 'b');
    this.loginservice.addloginbyarray([this.loginName, this.loginPassword]);

    this.loginservice.login().subscribe(
      (response) => {
        console.log('loginperson:', response);

        this.router.navigate(['/']);
        // Optionally, redirect or show success message
      },
      (error) => {
        console.error('Error loging:', error);
        // Handle error (show error message, etc.)
      }
    );

    // Add your login logic here
  }

  onRegister() {
    console.log('Register:', this.registerName, this.registerPassword);
  }
}

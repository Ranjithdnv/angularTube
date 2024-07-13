// import { CanActivateFn } from '@angular/router';

// export const authOneGuard: CanActivateFn = (route, state) => {
//   // canActivate(): boolean {
//     if (loginserviceService.isLoggedIn()) {
//       return true;
//     } else {
//       route.navigate(['/login']);
//       return false;
//     }
//   }
// src/app/auth.guard.ts
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { LoginserviceService } from '../services/loginservice.service';
import { Observable } from 'rxjs';
export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root',
})
//,  CanDeactivate<CanComponentDeactivate>
export class AuthoneGuard
  implements CanDeactivate<CanComponentDeactivate>, Resolve<any>, CanActivate
{
  constructor(
    private loginservice: LoginserviceService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.loginservice.name) {
      console.log(this.loginservice.name);
      return true;
    } else {
      console.log(this.loginservice.name);
      this.router.navigate(['/login']);
      return false;
    }
  }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.loginservice.login();
  }

  canDeactivate(
    component: CanComponentDeactivate
  ): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}

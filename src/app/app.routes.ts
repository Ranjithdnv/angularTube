import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { VideoComponent } from './components/video/video.component';
import { AccountComponent } from './components/account/account.component';
import { UploadComponent } from './components/upload/upload.component';
import { LoginserviceService } from './services/loginservice.service';
import { inject } from '@angular/core';
import { AuthoneGuard } from './auth/auth-one.guard';
import { VideowatchComponent } from './components/videowatch/videowatch.component';
import { VideosingleComponent } from './components/videosingle/videosingle.component';
//  ser=inject(LoginserviceService)

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canDeactivate: [AuthoneGuard],
  },
  {
    path: '',
    component: VideoComponent,
    canActivate: [AuthoneGuard],
  },
  {
    path: 'videosingle',
    component: VideosingleComponent,
    canActivate: [AuthoneGuard],
  },
  {
    path: 'account',
    component: AccountComponent,
  },
  {
    path: 'upload',
    component: UploadComponent,
  },
  {
    path: 'video',
    component: VideowatchComponent,
    canActivate: [AuthoneGuard],
  },
  {
    path: '',
    component: VideoComponent,
  },
];

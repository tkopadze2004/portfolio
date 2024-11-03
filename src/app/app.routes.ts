import { Routes } from '@angular/router';
import { RgacComponent } from './rgac/rgac.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  {
    path:'',
    component:RgacComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  }
];

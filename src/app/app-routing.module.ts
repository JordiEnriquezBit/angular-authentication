import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
//{ path: '**', component: NotfoundComponent }
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'profile', component:ProfileComponent},
  {path:'register', component:RegisterComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

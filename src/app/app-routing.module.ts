import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BoardUserComponent } from './content/board-user/board-user.component';
import { ProfilComponent } from './content/profil/profil.component';
import { PublicPageComponent } from './content/public-page/public-page.component';
import { ReservationsComponent } from './content/reservations/reservations.component';

const routes: Routes = [
  {path:'welcome', component: PublicPageComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},

  {path:'user-board', component: BoardUserComponent},
  {path:'profile', component: ProfilComponent},
  {path:'reservations', component: ReservationsComponent},

  {path: '', redirectTo: 'welcome', pathMatch: 'full'},

  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

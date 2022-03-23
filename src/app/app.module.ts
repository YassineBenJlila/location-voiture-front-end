import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PublicPageComponent } from './content/public-page/public-page.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './auth/auth.interceptor';
import { BoardUserComponent } from './content/board-user/board-user.component';
import { ProfilComponent } from './content/profil/profil.component';
import { ReservationsComponent } from './content/reservations/reservations.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PublicPageComponent,
    LoginComponent,
    RegisterComponent,
    BoardUserComponent,
    ProfilComponent,
    ReservationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

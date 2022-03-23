import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  reactiveForm: any;
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  error = '';
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  reloadPage(): void {
    window.location.reload();
  }

  signIn() {
    var login = (document.body.querySelector("#login") as HTMLInputElement)?.value;
    console.log(login)
    if (login === '') {
      sessionStorage.removeItem('loggedIn');
      return this.error = 'Veuillez verifier votre login ou mot de passe';
    }

    this.error = '';
    sessionStorage.setItem('loggedIn', login);
    return this.router.navigate(['/user-board']);

  }
}

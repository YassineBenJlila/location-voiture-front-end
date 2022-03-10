import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  reactiveForm: any;
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      tel: new FormControl('', [Validators.required]),
      birthDate: new FormControl('', [Validators.required]),
    })

    this.maxDate();
  }

  maxDate() {
    var today: any;
    today = new Date();
    today = today.getFullYear()-18+'-'+("0"+(today.getMonth()+1)).slice(-2)+'-'+("0"+today.getDate()).slice(-2);
    (document.getElementById("birthDate") as HTMLInputElement)?.setAttribute("max", today);
  }

  onSubmit(templateForm: any) {
    const { username, email, password } = this.form;
    this.authService.register(username, email, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}

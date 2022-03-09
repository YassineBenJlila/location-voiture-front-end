import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  reactiveForm: any;

  constructor() { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      tel: new FormControl('', [Validators.required]),
      birthDate: new FormControl('', [Validators.required]),
    })
  }

  onLogin(templateForm: any) {
  }
}

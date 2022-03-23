import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var fName = document.body.querySelector('#firstname') as HTMLInputElement;
    var lName = document.body.querySelector('#lastname') as HTMLInputElement;
    var email = document.body.querySelector('#email') as HTMLInputElement;
    var birthDate = document.body.querySelector('#birthDate') as HTMLInputElement;
    var address = document.body.querySelector('#address') as HTMLInputElement;
    var tel = document.body.querySelector('#tel') as HTMLInputElement;

    
    fName.value = 'Ghazi';
    lName.value = 'Boubaker';
    email.value = 'Ghazi@yopmail.com';
    birthDate.value = '1992-04-03';
    address.value = 'Tunis tunisie';
    tel.value = '00 111 222';
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.scss']
})
export class BoardUserComponent implements OnInit {

  cars: any;
  regions: any;
  car_id : any;
  baseUrl = "/assets/images/cars/";
  constructor() { }

  ngOnInit(): void {
    var id = 0;
    this.cars = [
      {
        id: id++, model: 'Mazda', photo: this.baseUrl + 'mazda.png', price: '150dt', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
      },
      {
        id: id++, model: 'Mercedes', photo: this.baseUrl + 'mercedes.png', price: '320dt', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
      },
      {
        id: id++, model: 'F-Type', photo: this.baseUrl + 'Jaguar-F-TYPE.png', price: '350dt', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
      },
      {
        id: id++, model: 'Audi RS7', photo: this.baseUrl + 'audi_rs7.png', price: '350dt', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
      },
      {
        id: id++, model: 'Range Rover', photo: this.baseUrl + 'rangerover.png', price: '300dt', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
      },
      {
        id: id++, model: 'Zuzuki', photo: this.baseUrl + 'zuzuki.png', price: '150dt', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
      },
      {
        id: id++, model: 'Toyota Camry', photo: this.baseUrl + 'toyota_camry.png', price: '150dt', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
      },
      {
        id: id++, model: 'VW Golf 8', photo: this.baseUrl + 'vw_golf8.png', price: '250dt', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
      },
      {
        id: id++, model: 'Porsche', photo: this.baseUrl + 'porsche.png', price: '500dt', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
      },
      {
        id: id++, model: 'Mercedes G Class', photo: this.baseUrl + 'mercedes_Gclass.png', price: '350dt', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
      },
      {
        id: id++, model: 'BMW M3', photo: this.baseUrl + 'BMW_m3.png', price: '350dt', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
      },
      {
        id: id++, model: 'BMW i8', photo: this.baseUrl + 'BMW_i8.png', price: '450dt', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
      },
      {
        id: id++, model: 'Nissan GTR', photo: this.baseUrl + 'nissan_gtr.png', price: '400dt', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
      },
      {
        id: id++, model: 'Ford Mustang', photo: this.baseUrl + 'ford_mustang.png', price: '400dt', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
      },
    ]

    id = 0;
    this.regions = [
      {id: id++, label: 'Tunis' },
      {id: id++, label: 'Ariana' },
      {id: id++, label: 'Nabeul' },
      {id: id++, label: 'Sousse' },
      {id: id++, label: 'Sfax' },
      {id: id++, label: 'Djerba' },
    ]

    console.table(this.cars);
    console.table(this.regions);

    // Get the <span> element that closes the modal
    var modal = document.getElementById("myModal") as HTMLDivElement;
    var span = document.getElementsByClassName("close")[0] as HTMLSpanElement;
    span.onclick = function () {
      modal.style.opacity = "0";
      modal.style.pointerEvents = "none";
    }

  }

  showModal(id: any): void {
    // document.querySelector("#modal-dialog")?.showModal();
    console.log(id);
    this.car_id = id;

    // Get the modal
    var modal = document.getElementById("myModal") as HTMLDivElement;

    // When the user clicks the button, open the modal 
    modal.style.opacity = "1";
    modal.style.pointerEvents = "auto";

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.opacity = "0";
        modal.style.pointerEvents = "none";
      }
    }
  }
}

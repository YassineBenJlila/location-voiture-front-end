import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.scss']
})
export class BoardUserComponent implements OnInit {

  cars: any;
  regions: any;
  car_id : any;
  username : any;
  reserved_cars : any;

  error = '';
  
  baseUrl = "/assets/images/cars/";
  constructor() { }

  ngOnInit(): void {
    var id = 0;
    this.cars = [
      {
        id: id++, model: 'Mazda', photo: this.baseUrl + 'mazda.png', price: 150, description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
      },
      {
        id: id++, model: 'Mercedes', photo: this.baseUrl + 'mercedes.png', price: 320, description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
      },
      {
        id: id++, model: 'F-Type', photo: this.baseUrl + 'Jaguar-F-TYPE.png', price: 350, description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
      },
      {
        id: id++, model: 'Audi RS7', photo: this.baseUrl + 'audi_rs7.png', price: 350, description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
      },
      {
        id: id++, model: 'Range Rover', photo: this.baseUrl + 'rangerover.png', price: 300, description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
      },
      {
        id: id++, model: 'Zuzuki', photo: this.baseUrl + 'zuzuki.png', price: 100, description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
      },
      {
        id: id++, model: 'Toyota Camry', photo: this.baseUrl + 'toyota_camry.png', price: 120, description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
      },
      {
        id: id++, model: 'VW Golf 8', photo: this.baseUrl + 'vw_golf8.png', price: 250, description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
      },
      {
        id: id++, model: 'Porsche', photo: this.baseUrl + 'porsche.png', price: 500, description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
      },
      {
        id: id++, model: 'Mercedes G Class', photo: this.baseUrl + 'mercedes_Gclass.png', price: 400, description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
      },
      {
        id: id++, model: 'BMW M3', photo: this.baseUrl + 'BMW_m3.png', price: 350, description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
      },
      {
        id: id++, model: 'BMW i8', photo: this.baseUrl + 'BMW_i8.png', price: 450, description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
      },
      {
        id: id++, model: 'Nissan GTR', photo: this.baseUrl + 'nissan_gtr.png', price: 400, description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
      },
      {
        id: id++, model: 'Ford Mustang', photo: this.baseUrl + 'ford_mustang.png', price: 400, description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
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

    // console.table(this.cars);
    // console.table(this.regions);

    // Get the <span> element that closes the modal
    var modal = document.getElementById("myModal") as HTMLDivElement;
    var modal_content = document.querySelector(".modal-content") as HTMLDivElement;
    var span = document.getElementsByClassName("close")[0] as HTMLSpanElement;
    span.onclick = function () {
      modal_content.style.transform = "scale(0.8)";
      modal.style.opacity = "0";
      modal.style.pointerEvents = "none";
    }

    this.username = sessionStorage.getItem('loggedIn');

    this.minDate();    

    this.reserved_cars = sessionStorage.getItem('reserved_cars')?sessionStorage.getItem('reserved_cars'):null;
    this.reserved_cars = JSON.parse(this.reserved_cars);    

  }

  showModal(id: any): void {
    // document.querySelector("#modal-dialog")?.showModal();
    // console.log(id);
    this.car_id = id;

    // Get the modal
    var modal = document.getElementById("myModal") as HTMLDivElement;
    var modal_content = document.querySelector(".modal-content") as HTMLDivElement;

    // When the user clicks the button, open the modal 
    modal.style.opacity = "1";
    modal.style.pointerEvents = "auto";
    modal_content.style.transform = "scale(1)";

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal_content.style.transform = "scale(0.8)";
        modal.style.opacity = "0";
        modal.style.pointerEvents = "none";
      }
    }
  }
  
  hideModal(id: any): void {
    // document.querySelector("#modal-dialog")?.showModal();
    // console.log(id);
    this.car_id = id;

    // Get the modal
    var modal = document.getElementById("myModal") as HTMLDivElement;
    var modal_content = document.querySelector(".modal-content") as HTMLDivElement;

    // When the user clicks the button, open the modal 
    modal.style.opacity = "0";
    modal.style.pointerEvents = "none";
    modal_content.style.transform = "scale(0.8)";

  }

  minDate() {
    var today: any;
    today = new Date();
    today = today.getFullYear()+'-'+("0"+(today.getMonth()+1)).slice(-2)+'-'+("0"+today.getDate()).slice(-2);
    (document.getElementById("fromDate") as HTMLInputElement)?.setAttribute("min", today);
    (document.getElementById("toDate") as HTMLInputElement)?.setAttribute("min", today);
  }

  maxDate() {
    var minDate = (document.getElementById("fromDate") as HTMLInputElement)?.value;
    var toDate = (document.getElementById("toDate") as HTMLInputElement);
    toDate?.setAttribute("min", minDate);
    if (minDate > toDate.value)
    toDate.value = minDate;
    // console.log(minDate);
  }

  calculatePeriod(fromDate: any, toDate: any): number {
    fromDate = new Date(fromDate);
    toDate = new Date(toDate);

    var period = toDate.getTime() - fromDate.getTime();

    return ( period / (1000 * 60 * 60 * 24) ) + 1;
  }

  reserve(car: any) {
    if (car==null) return this.error = 'Erreur: Aucun véhicule sélectionné';
    // get period
    var fromDate : any;
    var toDate : any;
    var region : any;
    fromDate = (document.querySelector('#fromDate') as HTMLInputElement).value;
    toDate = (document.querySelector('#toDate') as HTMLInputElement).value;
    region = (document.querySelector('#region') as HTMLInputElement).value;

    var period = this.calculatePeriod(fromDate, toDate);

    if (!fromDate || !toDate) return this.error = 'Veuillez choisir une période';
    if (!region) return this.error = 'Veuillez choisir une region';
    
    this.error = '';
    // get car array
    // console.log(car);
    
    this.reserved_cars = sessionStorage.getItem('reserved_cars')?sessionStorage.getItem('reserved_cars'):'[]';
    // console.log(this.reserved_cars);
    this.reserved_cars = JSON.parse(this.reserved_cars);


    // Add period to car array
    car.period = period;
    console.log(car);

    // Add Price to car array
    var totalPrice = car.price * period;
    car.totalPrice = totalPrice;

    // Add Region to car array
    car.region = region;
    

    this.reserved_cars.push(car);
    // console.table(this.reserved_cars);
    
    return sessionStorage.setItem('reserved_cars', JSON.stringify(this.reserved_cars) );
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {

  reserved_cars : any;
  car_id: any;

  constructor() { }

  ngOnInit(): void {
    this.reserved_cars = sessionStorage.getItem('reserved_cars')?sessionStorage.getItem('reserved_cars'):null;
    this.reserved_cars = JSON.parse(this.reserved_cars);

    console.table(this.reserved_cars);

    // Get the <span> element that closes the modal
    var modal = document.getElementById("myModal") as HTMLDivElement;
    var modal_content = document.querySelector(".modal-content") as HTMLDivElement;
    var span = document.getElementsByClassName("close")[0] as HTMLSpanElement;
    span.onclick = function () {
      modal_content.style.transform = "scale(0.8)";
      modal.style.opacity = "0";
      modal.style.pointerEvents = "none";
    }
  }

  remove(id: number) {
    this.reserved_cars = sessionStorage.getItem('reserved_cars')?sessionStorage.getItem('reserved_cars'):null;
    this.reserved_cars = JSON.parse(this.reserved_cars);

    this.reserved_cars.splice(id,1);
    console.table(this.reserved_cars);

    this.hideModal();

    return sessionStorage.setItem('reserved_cars', JSON.stringify(this.reserved_cars) );
  }

  showModal(id: any): void {
    // document.querySelector("#modal-dialog")?.showModal();
    // console.log(id);
    this.car_id = id;
    console.log(this.car_id);

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

  hideModal(): void {
    // Get the modal
    var modal = document.getElementById("myModal") as HTMLDivElement;
    var modal_content = document.querySelector(".modal-content") as HTMLDivElement;

    // When the user clicks the button, open the modal 
    modal.style.opacity = "0";
    modal.style.pointerEvents = "none";
    modal_content.style.transform = "scale(0.8)";

  }

}

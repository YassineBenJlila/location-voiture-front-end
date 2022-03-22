import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'location-voiture-front-end';

  @HostListener('window:scroll') onScroll(): void {
    console.log(document.body.clientHeight);
  }

  getYPosition(e: Event): number {
    var height = document.body.clientHeight;
    console.log(height);
    return height;
  }
}

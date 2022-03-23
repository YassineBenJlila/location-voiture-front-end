import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  loggedIn: any;
  
  constructor(
    private router: Router,
    private cd: ChangeDetectorRef
    ) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('loggedIn') ) {
      this.loggedIn = sessionStorage.getItem('loggedIn');
    } else this.loggedIn = false;
  }

  hideMenu() {
    (document.querySelector('.checkbox') as HTMLInputElement).checked = false;
  }

  logout() {
    sessionStorage.removeItem('loggedIn');
    return this.router.navigate(['/welcome']);
  }

  ngDoCheck() {
    if (!sessionStorage.getItem('loggedIn')) {
      this.loggedIn = false
    }  this.loggedIn = sessionStorage.getItem('loggedIn') ;
    this.cd.detectChanges();
  }
}

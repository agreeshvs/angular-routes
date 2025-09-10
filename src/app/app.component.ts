import { Component, inject } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-router';
  showLoader: boolean = false;
  router: Router = inject(Router);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    // Using router events to show loader
    this.router.events.subscribe( ( routerEvent: Event ) => {
      if( routerEvent instanceof NavigationStart ){
        this.showLoader = true; 
        // show the loader when navigation starts
      }
      if( routerEvent instanceof NavigationEnd || 
          routerEvent instanceof NavigationCancel ||
          routerEvent instanceof NavigationError
        ){
        this.showLoader = false; 
        // Hide the loader when navigtion ends or is cancelled
        // Using canDeactivate guard, it cancel the router event
        // hide the loader when navigation ends
        // hide when error occurs in routing.
      }
      
    })
  }
}

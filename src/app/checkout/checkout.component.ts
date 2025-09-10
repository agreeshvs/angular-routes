import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../Models/course';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  course: Course;
  router: Router = inject(Router);
  tax = 47.41;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    /* this.activeRoute.data.subscribe( (data) => {
      console.log(data);
      this.course = data;
    }) */
    // this.course = this.router.getCurrentNavigation()?.extras.state as Course;
    this.course = history.state as Course;
    console.log(this.course);
  }
}

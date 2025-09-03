import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent {
  courseService = inject(CourseService)
  popularCourses: Course[] = [];

  constructor(private router: Router, private activeRoute: ActivatedRoute){}

  ngOnInit(){
    this.popularCourses = this.courseService.courses.filter(c => c.rating >= 4.5);
  }

  navigateToCourses(){
    // Redirect to Absolute Path using navigate() and navigateByUrl()
    // this.router.navigate(['/courses']); // using array
    this.router.navigateByUrl('courses'); // using string value

    /* 
      // Setting route as Relative Path
      this.router.navigate(['courses'], {relativeTo: this.activeRoute});
    */


    /* this.router.navigate(['/courses','popular']);
    this.router.navigateByUrl('/courses/popular'); */

    //activeRoute provide info about current route
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { CourseService } from '../Services/course.service';
import { Course } from '../Models/course';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  coursesService = inject(CourseService);
  AllCourses: Course[];
  router: Router = inject(Router);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  searchString: string = '';

  ngOnInit(): void {
    // read the query parameter value from the URL
    // this.searchString = this.activeRoute.snapshot.queryParams['search'];

    // Alternative way to read query parameter value
    /* this.searchString = this.activeRoute.snapshot.queryParamMap.get('search') || '';
    console.log(this.searchString); */

    this.activeRoute.queryParamMap.subscribe( (params) => {
      this.searchString = params.get('search') || '';
      console.log(this.searchString);
      // Conditions to filter the courses.
      if( this.searchString == undefined || this.searchString.trim() == ''){
        this.AllCourses = this.coursesService.courses;
      } else{
        this.AllCourses = this.coursesService.courses.filter(
          // filter all courses whose title contains the search string
          course => course.title.toLowerCase().includes(
            this.searchString.toLocaleLowerCase()
          )
        );
      }
    })

    
  }

  navigateToDetails(id: any){
     this.router.navigate(['courses/course', id]);
  }
}

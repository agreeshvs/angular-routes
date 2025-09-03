import { Component, inject } from '@angular/core';
import { CourseService } from '../Services/course.service';
import { Course } from '../Models/course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  coursesService = inject(CourseService);
  AllCourses: Course[] = this.coursesService.courses;
  router: Router = inject(Router);

  navigateToDetails(id: any){
    this.router.navigate(['courses/course', id]);
  }
}

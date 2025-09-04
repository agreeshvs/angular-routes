import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit, OnDestroy {
  CourseService = inject(CourseService);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  selectedCourse: Course | undefined = this.CourseService.courses[0];
  courseId: number = 1;
  paramsObs;
  ngOnInit(){

    // this.courseId = this.activatedRoute.snapshot.params['id'];
    /* this.courseId = +(this.activatedRoute.snapshot.paramMap.get('id') ?? 0);

    // snapshot only return the value at the time of component initialization
   
    console.log(this.courseId); */

    // to get the updated value when the parameter changes
    /* this.paramsObs = this.activatedRoute.params.subscribe( (params) => {
      // '+' sign is used to convert string to number
      // Updated route value can be accessed here using subscribe method
      this.courseId = +params['id'];
      console.log(this.courseId);
      this.selectedCourse = this.CourseService.courses.find(c => c.id === this.courseId);
    }) */

    // Using paramMap to get the updated value when the parameter changes
    this.paramsObs = this.activatedRoute.paramMap.subscribe( (params) => {
      // '+' sign is used to convert string to number
      // Updated route value can be accessed here using subscribe method
      this.courseId = +params.get('id');
      console.log(this.courseId);
      this.selectedCourse = this.CourseService.courses.find(c => c.id === this.courseId);
    })
    // this.selectedCourse = this.CourseService.courses.find(c => c.id === this.courseId);
  }
  
  ngOnDestroy(){
    this.paramsObs.unsubscribe();
  }
}

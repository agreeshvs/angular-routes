import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent {
  CourseService = inject(CourseService);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  selectedCourse: Course | undefined = this.CourseService.courses[0];
  courseId: number = 1;
  ngOnInit(){

    // this.courseId = this.activatedRoute.snapshot.params['id'];
    this.courseId = +(this.activatedRoute.snapshot.paramMap.get('id') ?? 0);
    console.log(this.courseId);
    this.selectedCourse = this.CourseService.courses.find(c => c.id === this.courseId);
  }
}

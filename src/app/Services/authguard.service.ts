import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanDeactivateFn, Resolve, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { ContactComponent } from "../contact/contact.component";
import { Course } from "../Models/course";
import { CourseService } from "./course.service";

export interface IDActivateComponent{
    canExit: () => boolean | Observable<boolean> | Promise<boolean>;
}

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild, CanDeactivate<IDActivateComponent>, Resolve<Course[]> {
    authService: AuthService = inject(AuthService);
    router: Router = inject(Router);
    courseService: CourseService = inject(CourseService);
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean 
    /* | Observable<boolean> | Promise<boolean> */
    {
        // Add your authentication logic here

        // For simplicity, we will just check if the user is logged in
        if( this.authService.isAuthenticated()){
            return true;
        }
        else{
            // Redirect to login page
            this.router.navigate(['login']);
            return false;
        }
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean 
    /* | Observable<boolean> | Promise<boolean> */
    {
        // Add your authentication logic here
       return this.canActivate(childRoute, state);
    }

    canDeactivate(
        component: IDActivateComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {
        // Add your authentication logic here
        return component.canExit();
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Course [] | Observable<Course[]> | Promise<Course[]>     {
        let courseList: Course[] = [];
        /* this.courseService.getAllcourses().subscribe( (courses: Course[]) => {
            courseList = courses;
        });
        return courseList; */
        return this.courseService.getAllcourses();
    }
}
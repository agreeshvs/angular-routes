
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { CoursesComponent } from "./courses/courses.component";
import { CourseDetailComponent } from "./courses/course-detail/course-detail.component";
import { PopularComponent } from "./home/popular/popular.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { AuthGuardService } from "./Services/authguard.service";
import { canActivate, canActivateChild, canDeactivate, resolve } from "./auth.guard";
import { AuthService } from "./Services/auth.service";



// Define Routes Here
const routes: Routes = [

  // Redirect Route
  {    path: '',    redirectTo: 'home',   pathMatch: 'full'  },
  {    path: 'home',    component: HomeComponent  },
  {    path: 'about',    component: AboutComponent  },
  {    path: 'contact',    component: ContactComponent, canDeactivate: [ canDeactivate]  },
  // {    path: 'courses',    component: CoursesComponent, resolve: {courses: AuthGuardService}  },
  {    path: 'courses',    component: CoursesComponent, resolve: {courses: resolve}  },
  { path: 'courses', canActivateChild: [canActivateChild], children: [
    { path: 'course/:id', component: CourseDetailComponent},
    { path: 'popular', component: PopularComponent},
    {
      path: 'checkout', component: CheckoutComponent, data: {
        name: 'Test course', price: 399
      }
    }
  ] },
  { path: 'login', component: LoginComponent},

  // wildcard route - home page
  {    path: '**',    component: NotFoundComponent  }, // Call when none of the route match
  // Wildcard route should be the last route in the route array
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes,{enableTracing: true}) // forChild for feature module
    ],
    exports: [RouterModule]
})

export class RoutingModule {
    
}
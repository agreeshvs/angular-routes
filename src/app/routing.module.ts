
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
import { canActivate, canActivateChild, canDeactivate } from "./auth.guard";
import { AuthService } from "./Services/auth.service";



// Define Routes Here
const routes: Routes = [
  // Default Route
  // {    path: '',    component: HomeComponent  },

  // Redirect Route
  {    path: '',    redirectTo: 'home',   pathMatch: 'full'  },
  {    path: 'home',    component: HomeComponent  },
  {    path: 'about',    component: AboutComponent  },
  {    path: 'contact',    component: ContactComponent, canDeactivate: [ canDeactivate]  },
  {    path: 'courses',    component: CoursesComponent  },
  // {    path: 'courses/course/:id',    component: CourseDetailComponent  },

  // using child routes for course details
  // canActivateChild protects all the child routes
  // canActivate protects only the specified route including child routes
  /* { path: 'courses', canActivateChild: [AuthGuardService], children: [
    { path: 'course/:id', component: CourseDetailComponent},
    { path: 'popular', component: PopularComponent},
    //{
   //   path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuardService]
   // },
    {
      path: 'checkout', component: CheckoutComponent
    }
  ] } */,
  { path: 'courses', canActivateChild: [canActivateChild], children: [
    { path: 'course/:id', component: CourseDetailComponent},
    { path: 'popular', component: PopularComponent},
    /* {
      path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuardService]
    } */
    {
      path: 'checkout', component: CheckoutComponent
    }
  ] },
  { path: 'login', component: LoginComponent},

  // wildcard route - home page
  {    path: '**',    component: NotFoundComponent  }, // Call when none of the route match
  // Wildcard route should be the last route in the route array
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class RoutingModule {
    
}
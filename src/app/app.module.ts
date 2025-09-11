import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ServicesService } from './Services/services.service';
import { CourseService } from './Services/course.service';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BannerComponent } from './home/banner/banner.component';
import { ServicesComponent } from './home/services/services.component';
import { TestimonyComponent } from './home/testimony/testimony.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { PopularComponent } from './home/popular/popular.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule, Routes } from '@angular/router';
import { RoutingModule } from './routing.module';
import { AdminComponent } from './admin/admin.component';
import { StudentService } from './Services/student.service';
import { PercentagePipe } from './Pipes/percentage.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ContactComponent,
    AboutComponent,
    BannerComponent,
    ServicesComponent,
    TestimonyComponent,
    ContactUsComponent,
    PopularComponent,
    CoursesComponent,
    CourseDetailComponent,
    LoginComponent,
    NotFoundComponent,
    CheckoutComponent,
    AdminComponent,
    PercentagePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule
  ],
  providers: [ServicesService, CourseService, StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

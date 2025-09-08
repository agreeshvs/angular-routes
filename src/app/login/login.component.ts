import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('username') username: ElementRef;
  @ViewChild('password') password: ElementRef;
  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  logoutSub: any;

  loginUser(){
    const username = this.username.nativeElement.value;
    const password = this.password.nativeElement.value;
    const user = this.authService.login(
      username, 
      password
    );

    if( user == undefined){
      alert("Invalid Credentials");
    }
    else{
      alert("Welcome " + user.name+ "! You are successfully logged in.");
      this.router.navigate(['/courses']);
    }
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.logoutSub = this.activeRoute.queryParamMap.subscribe( (params) => {
      if( Boolean(params.get('logout')) ){
        this.authService.logout();
        alert("You have been logged out successfully.");
        // this.router.navigate(['/home']);
      }
    })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.logoutSub.unsubscribe();
  }
}

import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild {
    authService: AuthService = inject(AuthService);
    router: Router = inject(Router);
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
}
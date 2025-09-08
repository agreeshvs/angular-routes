import { inject } from "@angular/core";
import { AuthService } from "./Services/auth.service";
import { Router } from "@angular/router";

export const canActivate = () => {
    const authService: AuthService = inject(AuthService);
    const router: Router = inject(Router);
    if( authService.isAuthenticated()){
        return true;
    }
    else{
        // Redirect to login page
        router.navigate(['login']);
        return false;
    }
};
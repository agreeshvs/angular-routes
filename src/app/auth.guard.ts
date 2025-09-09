import { inject } from "@angular/core";
import { AuthService } from "./Services/auth.service";
import { Router } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";

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

export const canActivateChild = () => {
    return canActivate();
}

export const canDeactivate = (component: ContactComponent) => {
    return component.canExit();
}
import { Component } from '@angular/core';
import { IDActivateComponent } from '../Services/authguard.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements IDActivateComponent {
  firstName: string = '';
  lastName: string = '';
  country: string = 'india';
  message: string = '';
  isSubmitted: boolean = false;


  onSubmit(){
    this.isSubmitted = true; 
    alert("Form Submitted Successfully!");
  }

  canExit(): boolean{
    if( this.firstName || this.lastName || this.message ){
      return confirm("You have unsaved changes. Do you really want to leave?");
    }
    else{
      return true;
    }
  }
}

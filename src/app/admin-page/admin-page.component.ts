import { Component, Output, EventEmitter } from '@angular/core';
import { Rafter } from '../rafter.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { RafterService } from '../rafter.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
  providers: [RafterService]
})
export class AdminPageComponent {
    constructor(private rafterService: RafterService) { }
    @Output() newRafterSender = new EventEmitter();

    showNew: boolean = false;

    showNewRafter() {
      this.showNew = true;
    }

    hideNewRafter() {
      this.showNew = false;
    }

    submitForm(name: string,
       email: string,
       state: string,
       yearsRafting: number,
       favoriteRiverStretch: string,
       guide: string,
       comments: string) {
      var newRafter: Rafter = new Rafter(
         name,
         email,
         state,
         yearsRafting,
         favoriteRiverStretch,
         guide,
         comments);
        //  This makes it so they have to fill out the form before submitting
         if (newRafter.name !== '' &&
            newRafter.email !== '' &&
            newRafter.state !== '' &&
            newRafter.favoriteRiverStretch !== '' &&
            newRafter.guide !== '') {
           this.rafterService.addRafter(newRafter);
         } else {
           alert("Please enter information into all fields.");
         }
    }

}

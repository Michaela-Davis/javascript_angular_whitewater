import { Component } from '@angular/core';
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
      this.rafterService.addRafter(newRafter);
    }

}

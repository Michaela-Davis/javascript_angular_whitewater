import { Injectable } from '@angular/core';
import { Rafter } from './rafter.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class RafterService  {
  rafters: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.rafters = angularFire.database.list('rafters');
  }

  getRafters() {
    return this.rafters;
  }

  getRafterById(rafterId: string) {
    return this.angularFire.database.object('rafters/' + rafterId)
  }

  addRafter(newRafter: Rafter) {
    this.rafters.push(newRafter);
  }

  updateRafter(localUpdatedRafter){
    var rafterEntryInFirebase = this.getRafterById(localUpdatedRafter.$key);
    rafterEntryInFirebase.update({name: localUpdatedRafter.name,
                                email: localUpdatedRafter.email,
                                state: localUpdatedRafter.state,
                                yearsRafting: localUpdatedRafter.yearsRafting,
                                favoriteRiverStretch: localUpdatedRafter.favoriteRiverStretch,
                                guide: localUpdatedRafter.guide,
                                comments: localUpdatedRafter.comments});
  }

  deleteRafter(localRafterToDelete){
    var rafterEntryInFirebase = this.getRafterById(localRafterToDelete.$key);
    rafterEntryInFirebase.remove();
  }

}

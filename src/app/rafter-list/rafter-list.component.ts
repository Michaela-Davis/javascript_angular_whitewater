import { Component, OnInit } from '@angular/core';
import { Rafter } from '../rafter.model';
import { Router } from '@angular/router';
import { RafterService } from '../rafter.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-rafter-list',
  templateUrl: './rafter-list.component.html',
  styleUrls: ['./rafter-list.component.css'],
  providers: [RafterService]
})
export class RafterListComponent implements OnInit {
  rafters: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private rafterService: RafterService) {}

  ngOnInit() {
    this.rafters = this.rafterService.getRafters();
  }

  goToDetailPage(clickedRafter) {
    this.router.navigate(['rafters', clickedRafter.$key]);
  }

}

import { Component, OnInit } from '@angular/core';
import { Rafter } from '../rafter.model';
import { Router } from '@angular/router';
import { RafterService } from '../rafter.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { RafterSortPipe } from './../rafter-sort.pipe';

@Component({
  selector: 'app-rafter-list',
  templateUrl: './rafter-list.component.html',
  styleUrls: ['./rafter-list.component.css'],
  providers: [RafterService]
})
export class RafterListComponent implements OnInit {
  rafters: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  sortValue: string = "All";

  constructor(private router: Router, private rafterService: RafterService) {}

  ngOnInit() {
    this.rafters = this.rafterService.getRafters();
  }

  goToDetailPage(clickedRafter) {
    this.router.navigate(['rafters', clickedRafter.$key]);
  }

  onChange(optionFromMenu) {
   this.sortValue = optionFromMenu;
  }

}

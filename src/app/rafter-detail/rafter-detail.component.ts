import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Rafter } from '../rafter.model';
import { RafterService } from '../rafter.service';
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-rafter-detail',
  templateUrl: './rafter-detail.component.html',
  styleUrls: ['./rafter-detail.component.css'],
  providers: [RafterService]
})
export class RafterDetailComponent implements OnInit {
  rafterId: string;
  rafterToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private rafterService: RafterService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.rafterId = urlParameters['id'];
    });
    this.rafterToDisplay = this.rafterService.getRafterById(this.rafterId);
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Rafter } from '../rafter.model';
import { RafterService } from '../rafter.service';

@Component({
  selector: 'app-edit-rafter',
  templateUrl: './edit-rafter.component.html',
  styleUrls: ['./edit-rafter.component.css'],
  providers: [RafterService]
})
export class EditRafterComponent implements OnInit {
  @Input() selectedRafter;


  constructor(private rafterService: RafterService) { }

  ngOnInit() {
  }

  showEdit: boolean = false;

  showEditRafter() {
    this.showEdit = true;
  }

  hideEditRafter() {
    this.showEdit = false;
  }

  beginUpdatingRafter(rafterToUpdate){
    this.rafterService.updateRafter(rafterToUpdate);
  }

  beginDeletingRafter(rafterToDelete){
    if(confirm("Delete rafter from group?")) {
      this.rafterService.deleteRafter(rafterToDelete);
    }
  }

}

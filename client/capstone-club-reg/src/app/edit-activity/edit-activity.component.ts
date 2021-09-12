import { Component, OnInit } from '@angular/core';
import { GroupService } from '../services/group.service';

@Component({
  selector: 'cr-edit-activity',
  templateUrl: './edit-activity.component.html',
  styleUrls: ['./edit-activity.component.css']
})
export class EditActivityComponent implements OnInit {

  errorMessage: string;

  constructor(private groupService: GroupService) { }

  getGroups(): void {
    this.groupService.getAllGroups()
    .subscribe( 
      res => {
      console.log(res)
    }, 
    err => {this.errorMessage = err;
      console.log(this.errorMessage);
    });
  }

  ngOnInit(): void {
    
  }

}

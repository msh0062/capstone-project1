import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Groups } from '../models/groups';
import { GroupService } from '../services/group.service';

@Component({
  selector: 'cr-edit-activity',
  templateUrl: './edit-activity.component.html',
  styleUrls: ['./edit-activity.component.css']
})
export class EditActivityComponent implements OnInit {

  seeAllGroupsInfo: FormGroup;
  errorMessage: string;
  groups: Groups;

  constructor(private groupService: GroupService, private fb: FormBuilder) { 
    this.seeAllGroupsInfo = this.fb.group({
      GroupName: ['', Validators.required],
    })
  }

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

  onSubmit(groups: Groups):void {
    this.groupService.getAllGroups().subscribe();
  }

}

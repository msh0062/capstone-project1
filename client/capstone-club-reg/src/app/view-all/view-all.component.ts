import { Component, OnInit } from '@angular/core';
import { FormGroupName } from '@angular/forms';
import { Clubs } from '../models/clubs';
import { Groups } from '../models/groups';
import { ClubsService } from '../services/clubs.service';
import { GroupService } from '../services/group.service';

@Component({
  selector: 'cr-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  errorMessage: string;
  group: Groups;
  allGroups;
  allClubs;

  constructor(private groupService: GroupService, private clubService: ClubsService) { }

getClubs(): void {
  this.clubService.getClubs()
    .subscribe((res: any)  => {
      this.allClubs = res;
    },
    err => {this.errorMessage = err;
      console.log(this.errorMessage);
      });
}

  getGroups(): void {
    this.groupService.getAllGroups()
      .subscribe((res: any) => {
        this.allGroups = res;
        console.log(this.allGroups)
  },
  err => {this.errorMessage = err;
  console.log(this.errorMessage);
  });

  
}

  ngOnInit(): void {
    this.getClubs();
      }

}

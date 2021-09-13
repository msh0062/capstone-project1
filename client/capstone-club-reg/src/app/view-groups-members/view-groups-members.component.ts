import { Component, OnInit } from '@angular/core';
import { Groups } from '../models/groups';
import { GroupService } from '../services/group.service';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'cr-view-groups-members',
  templateUrl: './view-groups-members.component.html',
  styleUrls: ['./view-groups-members.component.css']
})
export class ViewGroupsMembersComponent implements OnInit {

  constructor(private groupService: GroupService, private memberService: MemberService) { }

allGroups;
allMembers;
errorMessage: string;
group: Groups;

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
    this.getGroups();
  }

}

import { Component, OnInit } from '@angular/core';
import { Clubs } from '../models/clubs';
import { Groups } from '../models/groups';
import { Members } from '../models/members';
import { ClubsService } from '../services/clubs.service';
import { GroupService } from '../services/group.service';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'cr-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent implements OnInit {

  allClubs;
  allGroups;
  allMembers;
  errorMessage: string;
  groups: Groups;
  members: Members;

  constructor(private clubService: ClubsService ,private groupService: GroupService, private memberService: MemberService) { }

   getClubs(): void {
    this.clubService.getClubs()
      .subscribe((res: any) => {
        this.allClubs = res;
        console.log(this.allClubs)
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

  getGroupsName(categoryName: string): void {
    this.groupService.getGroupsByOrganizationId(categoryName)
    .subscribe(group => {
      this.allGroups = group
    },
      err => {this.errorMessage = err;
    });
  }

  getMembers(groupId: string): void {
    this.groupService.getSpecificMembersByGroupId(groupId)
    .subscribe( (member) => {
      this.allMembers = member
    },
    err => {this.errorMessage = err;
    });
  }

  deleteMember(groupId: string): void {
    this.groupService.deleteGroupByID(groupId)
      .subscribe(group => {
        this.allGroups = group;
      },
      err => {
        this.errorMessage =err;
      })
  }

  displayClub(name): void {
   this.getGroupsName(name);
  }

  displayGroups(name): void {
  this.getMembers(name);
  }

  displayMember(id):void {
    // this.getMembers(id);
  }

  addMember(groupId): void {
    this.groupService.sendGroup(groupId);
    console.log(groupId)
  }


  ngOnInit(): void {
    this.getClubs();
    
  }

}

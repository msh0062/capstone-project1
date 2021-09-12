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
  
  // group = {
  //   GroupId:'',
  //   GroupName: '',
  //   OrganizationName: '',
  //   SponsorName: '',
  //   SponsorPhone: '',
  //   SponsorEmail: '',
  //   MaxGroupSize: '',
  //   Members: [],
  //   published: false
  // };
  // submitted = false;

  constructor(private clubService: ClubsService ,private groupService: GroupService, private memberService: MemberService) { }

  // saveGroup(): void {
  //   const data = {
  //     GroupId: this.group.GroupId,
  //     GroupName: this.group.GroupName,
  //     OrganizationName: this.group.OrganizationName,
  //     SponsorName: this.group.SponsorName,
  //     SponsorPhone: this.group.SponsorPhone,
  //     SponsorEmail: this.group.SponsorEmail,
  //     MaxGroupSize: this.group.MaxGroupSize,
  //     Members: this.group.Members
  //   }
  //   this.groupService.addGroup(data)
  //     .subscribe( 
  //       res => {
  //       console.log(res)
  //       this.submitted = true;
  //     }, 
  //     err => {this.errorMessage = err;
  //       console.log(this.errorMessage);
  //     });
  //   }

  //   addNew(): void {
  //     this.submitted = false;
  //     this.group = {
  //       GroupId:'',
  //       GroupName: '',
  //       OrganizationName: '',
  //       SponsorName: '',
  //       SponsorPhone: '',
  //       SponsorEmail: '',
  //       MaxGroupSize: '',
  //       Members: [],
  //       published: false
  //     };
  //   }

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

  getMembersName(groupId: string, memberId): void {
    this.memberService.getMember(groupId, memberId)
    .subscribe( (member) => {
      this.allMembers = member
    },
    err => {this.errorMessage = err;
    });
  }

  insertGroup(group: Groups): void {
    this.groupService.addGroup(group)
      .subscribe(group => {
        this.groupService.getAllGroups();
      },
      (error) => console.log(error))
  }

  displayClub(name): void {
   this.getGroupsName(name);
  }

  displayGroups(name): void {
  this.getGroupsName(name);
  }



  ngOnInit(): void {
    this.getClubs();
    this.getGroups();
  }

}

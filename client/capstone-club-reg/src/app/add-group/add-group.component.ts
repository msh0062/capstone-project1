import { Component, OnInit } from '@angular/core';
import { GroupService } from '../services/group.service';

@Component({
  selector: 'cr-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {

  errorMessage: string;

  group = {
    GroupId:'',
    GroupName: '',
    OrganizationName: '',
    SponsorName: '',
    SponsorPhone: '',
    SponsorEmail: '',
    MaxGroupSize: '',
    Members: [],
    published: false
  };
  submitted = false;

  constructor(private groupService: GroupService) { }

  saveGroup(): void {
    const data = {
      GroupId: this.group.GroupId,
      GroupName: this.group.GroupName,
      OrganizationName: this.group.OrganizationName,
      SponsorName: this.group.SponsorName,
      SponsorPhone: this.group.SponsorPhone,
      SponsorEmail: this.group.SponsorEmail,
      MaxGroupSize: this.group.MaxGroupSize,
      Members: this.group.Members
    }
    this.groupService.addGroup(data)
      .subscribe( 
        res => {
        console.log(res)
        this.submitted = true;
      }, 
      err => {this.errorMessage = err;
        console.log(this.errorMessage);
      });
    }

    addNew(): void {
      this.submitted = false;
      this.group = {
        GroupId:'',
        GroupName: '',
        OrganizationName: '',
        SponsorName: '',
        SponsorPhone: '',
        SponsorEmail: '',
        MaxGroupSize: '',
        Members: [],
        published: false
      };
    }

  ngOnInit(): void {
  }

}

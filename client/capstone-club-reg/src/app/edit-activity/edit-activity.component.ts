import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Groups } from '../models/groups';
import { GroupService } from '../services/group.service';

@Component({
  selector: 'cr-edit-activity',
  templateUrl: './edit-activity.component.html',
  styleUrls: ['./edit-activity.component.css']
})
export class EditActivityComponent implements OnInit {

  // seeAllGroupsInfo: FormGroup;
  // errorMessage: string;
  // groups: Groups;

  // constructor(private groupService: GroupService, private fb: FormBuilder) { 
  //   this.seeAllGroupsInfo = this.fb.group({
  //     GroupName: ['', Validators.required],
  //   })
  // }

  // getGroups(): void {
  //   this.groupService.getAllGroups()
  //   .subscribe( 
  //     res => {
  //     console.log(res)
  //   }, 
  //   err => {this.errorMessage = err;
  //     console.log(this.errorMessage);
  //   });
  // }

  // ngOnInit(): void {
    
  // }

  // onSubmit(groups: Groups):void {
  //   this.groupService.getAllGroups().subscribe();
  // }

  @Input() selectedActivityId: string;
  @Input() selectedOrgName: string;
  group = null;
  editActivityForm: FormGroup;
  //TODO Implement .setValue() for OrgName

  getActivity(): void {
    if (this.selectedActivityId == null) {
      return;
    }
    this.groupService.getGroupById(this.selectedActivityId).subscribe(
      (group) => (this.group = group),
      (error) => {
        console.log(error);
      }
    );
    //console.log(JSON.stringify(this.booth));
  }

  constructor(private groupService: GroupService, private fb: FormBuilder) {
    this.editActivityForm = fb.group({
      GroupId: [null],
      GroupName: [null],
      OrganizationName: [null],
      SponsorName: [null],
      SponsorPhone: [null],
      SponsorEmail: [null],
      MaxGroupSize: 4,
    });
  }

  onSubmit(formValues) {
    this.editActivityForm?.controls.OrganizationName.setValue(this.selectedOrgName);
    console.log(formValues);
    //this.boothsService.editBoothById(formValues);
  }

  ngOnInit(): void {
    this.getActivity();
  }

}

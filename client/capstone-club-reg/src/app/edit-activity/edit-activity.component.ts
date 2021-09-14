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


  // TODO get the edit working with input
  @Input() selectedActivityId: string;
  @Input() selectedOrgName: string;
  group = null;
  editActivityForm: FormGroup;


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
  }

  ngOnInit(): void {
    this.getActivity();
  }

}

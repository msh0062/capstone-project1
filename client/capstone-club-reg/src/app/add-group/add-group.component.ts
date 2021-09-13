import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Groups } from '../models/groups';
import { GroupService } from '../services/group.service';

@Component({
  selector: 'cr-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})

// TODO UPDATE THIS TO USE VALIDATORS 
export class AddGroupComponent implements OnInit {

  addForm: FormGroup;
  groups: Groups;
  errorMessage: string;
  submit: boolean;

  constructor(private fb: FormBuilder, private groupService: GroupService) {
    this.addForm = this.fb.group({
      GroupName: ['', Validators.required],
      OrganizationName: ['', Validators.required],
      SponsorName: ['', Validators.required],
      SponsorPhone: ['', Validators.required],
      SponsorEmail: ['', Validators.required, Validators.email],
      MaxGroupSize: ['', Validators.required],
      Members: fb.group ({
        MemberId: [''],
        MemberEmail: [''],
        MemberName: [''],
        MemberPhone: [''],
      })
   });
  }

  ngOnInit(): void {
  }

  // TODO add check to see if activity exists or not
  onSubmit(groups: Groups):void {
    this.groupService.addGroup(groups).subscribe();
    alert('You succesfully added a new Actvity')
  }

}

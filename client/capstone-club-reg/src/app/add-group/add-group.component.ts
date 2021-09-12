import { group } from '@angular/animations';
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

  constructor(private fb: FormBuilder, private groupService: GroupService) {
    this.addForm = this.fb.group({
      GroupName: ['', Validators.required],
      OrganizationName: ['', Validators.required],
      SponsorName: ['', Validators.required],
      SponsorPhone: ['', Validators.required],
      SponsorEmail: ['', Validators.required, Validators.email],
      MaxGroupSize: ['', Validators.required],
    });
   }

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

    // addNew(): void {
    //   this.submitted = false;
    //   this.group = {
    //     GroupId:'',
    //     GroupName: '',
    //     OrganizationName: '',
    //     SponsorName: '',
    //     SponsorPhone: '',
    //     SponsorEmail: '',
    //     MaxGroupSize: '',
    //     Members: [],
    //     published: false
    //   };
    // }

  ngOnInit(): void {
    
  }

  onSubmit(groups: Groups):void {
    this.groupService.addGroup(groups).subscribe();
  }

}

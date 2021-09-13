import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MemberService } from '../services/member.service';
import { Members } from '../models/members';
import { Groups } from '../models/groups';
import { GroupService } from '../services/group.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cr-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

memberForm: FormGroup;
submit: boolean;
selectedActivity: Groups;
groupSub: Subscription;
groupId: string;


  constructor(private fb: FormBuilder, private memberService: MemberService, private groupService: GroupService) { 
    this.memberForm = this.fb.group({
      MemberId: ['', Validators.required],
      MemberName: ['', Validators.required],
      MemberEmail: ['', Validators.required],
      MemberPhone: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.groupSub = this.groupService.currentData.subscribe( activity => {
      this.selectedActivity = activity;
      console.log(this.selectedActivity)
    })
   
  }
  
// TODO Make adding Member Dynamic
  onSubmit(member: Members): void {
    console.log(member);
    // this.memberService.addMember(1, member).subscribe(); // hard coded
    this.memberService.addMember(this.selectedActivity.GroupId, member).subscribe();
  }




}

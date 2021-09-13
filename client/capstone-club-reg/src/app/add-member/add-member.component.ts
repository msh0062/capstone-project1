import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MemberService } from '../services/member.service';
import { Members } from '../models/members';

@Component({
  selector: 'cr-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

memberForm: FormGroup;
submit: boolean;

  constructor(private fb: FormBuilder, private memberService: MemberService) { 
    this.memberForm = this.fb.group({
      MemberId: ['', Validators.required],
      MemberName: ['', Validators.required],
      MemberEmail: ['', Validators.required],
      MemberPhone: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(member: Members): void {
    console.log(member);
    this.memberService.addMember(1, member).subscribe();
  }




}

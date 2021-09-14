import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Groups } from '../models/groups';
import { GroupService } from '../services/group.service';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'cr-boy-reg',
  templateUrl: './boy-reg.component.html',
  styleUrls: ['./boy-reg.component.css']
})
export class BoyRegComponent implements OnInit {


  addForm: FormGroup;

  constructor(private fb: FormBuilder, private memberService: MemberService) {
    this.addForm = this.fb.group({
      MemberId: ['', Validators.required],
      MemberName: ['', Validators.required],
      MemberPhone: ['', Validators.required],
      MemberEmail: ['', Validators.required, Validators.email],
   });
  }

  ngOnInit(): void {
     }

}

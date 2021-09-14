import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'cr-girl-reg',
  templateUrl: './girl-reg.component.html',
  styleUrls: ['./girl-reg.component.css']
})
export class GirlRegComponent implements OnInit {

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

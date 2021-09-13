import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { Groups } from '../models/groups';
import { GroupService } from '../services/group.service';

@Component({
  selector: 'cr-delete-group',
  templateUrl: './delete-group.component.html',
  styleUrls: ['./delete-group.component.css']
})
export class DeleteGroupComponent implements OnInit {

  addForm: FormGroup;
  groups: Groups;
  group; string;

  constructor(private fb: FormBuilder, private groupService: GroupService) {
    this.addForm = this.fb.group({
      GroupName: ['', Validators.required],
   });
  }

  ngOnInit(): void {
  }

 

}

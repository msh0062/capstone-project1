import { Component, Input, OnInit } from '@angular/core';
import { Groups } from '../models/groups';
import { GroupService } from '../services/group.service';

@Component({
  selector: 'cr-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {

  @Input() organizationId: string;
  groups: Groups[];
  errorMessage: string;
  
// TODO add null message
  getGroupsByOrganization(organizationId: string): void {
    if (organizationId == null) {
    } 
    this.groupService.getGroupsByOrganizationId(organizationId).subscribe((res: any) => {
      this.groups = res;
      console.log(this.groups)
},
err => {this.errorMessage = err;
console.log(this.errorMessage);
});
  }

  constructor(private groupService: GroupService) { }

  ngOnInit(): void {
    this.getGroupsByOrganization(this.organizationId);
  }

}

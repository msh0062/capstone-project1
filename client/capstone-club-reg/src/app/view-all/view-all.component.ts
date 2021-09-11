import { Component, OnInit } from '@angular/core';
import { Clubs } from '../models/clubs';
import { ClubsService } from '../services/clubs.service';

@Component({
  selector: 'cr-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  club: Clubs;
  allClubs;
  errorMessage: string;

  constructor(private clubsService: ClubsService) { }

  getClubs(): void {
    this.clubsService.getClubs()
      .subscribe((res: any) => {
        this.allClubs = res;
        console.log(this.allClubs)
  },
  err => {this.errorMessage = err;
  console.log(this.errorMessage);
  });
}

  ngOnInit(): void {
    this.getClubs();
  }

}

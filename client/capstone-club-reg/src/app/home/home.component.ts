import { Component, OnInit } from '@angular/core';
import { ClubsService } from '../services/clubs.service';

@Component({
  selector: 'cr-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

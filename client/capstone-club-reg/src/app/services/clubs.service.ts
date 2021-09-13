import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Clubs } from '../models/clubs';

@Injectable({
  providedIn: 'root'
})

export class ClubsService {

  allRaces;
  data = new BehaviorSubject<Clubs>({} as any);
  currentData = this.data.asObservable();
  private subject = new Subject<any>()

  constructor(private http: HttpClient) { }

// TODO Make url dynamic to port if needed/ server url name
  apiCallForOrgs = 'http://localhost:8082/api/organizations';

  jsonContentTypeHeaders = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
  };

  // errorMessage: string;

  getClubs(): Observable<Clubs> {
    const results: Observable<Clubs> = this.http.get<Clubs>(this.apiCallForOrgs);
    console.log(`getClubs() returned ${results}`);
    return results;
  }

  getSelectedClub(): Observable<any> {
    return this.subject.asObservable();
  }

  sendSelectedClub(data): void {
    this.data.next(data);
  }



}

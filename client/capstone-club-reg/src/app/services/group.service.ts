import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Groups } from '../models/groups';
import { group } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  getAllGroups = 'http://localhost:8082/api/groups/'


  jsonContentTypeHeaders = {
    headers: new HttpHeaders().set('Content-Type', 'application/json') //expect json data 
  }

  getClubs(): Observable<Groups> {
    const results: Observable<Groups> = this.http.get<Groups>(this.getAllGroups);
    console.log(`getClubs() returned ${results}`);
    return results;
  }

  getGroupById(groupId: number): Observable<Groups> {
  const results: Observable<Groups> = this.http.get<Groups>(`${this.getAllGroups}/${groupId}`);
  return results ;
  }

  addGroup(groupName: Groups): Observable<Groups> {
    const results: Observable<Groups> = this.http.post<Groups>(this.getAllGroups, groupName, this.jsonContentTypeHeaders);
    return results;
  }

  // updateGroup(goal: Groups): Observable<Groups> {
  //   const results: Observable<Groups> = this.http.put<Groups>(`${this.getAllGroups}/${.id}`, goal, this.jsonContentTypeHeaders);
  //   return results;
  // }

  constructor(private http: HttpClient) { }
}

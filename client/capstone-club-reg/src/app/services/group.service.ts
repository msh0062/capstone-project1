import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Groups } from '../models/groups';
import { group } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  allGroups = 'http://localhost:8082/api/groups/'


  jsonContentTypeHeaders = {
    headers: new HttpHeaders().set('Content-Type', 'application/json')  
  }

  getAllGroups(): Observable<Groups> {
    const results: Observable<Groups> = this.http.get<Groups>(this.allGroups);
    return results;
  }

  getGroupById(groupId: number): Observable<Groups> {
  const results: Observable<Groups> = this.http.get<Groups>(`${this.allGroups}/${groupId}`);
  return results ;
  }

  getGroupByName(groupName: string): Observable<Groups> {
    const results: Observable<Groups> = this.http.get<Groups>(`${this.allGroups}/${groupName}`);
    return results ;
    }

  addGroup(groupName: Groups): Observable<Groups> {
    const results: Observable<Groups> = this.http.post<Groups>(this.allGroups, groupName, this.jsonContentTypeHeaders);
    return results;
  }

  // updateGroup(goal: Groups): Observable<Groups> {
  //   const results: Observable<Groups> = this.http.put<Groups>(`${this.getAllGroups}/${.id}`, goal, this.jsonContentTypeHeaders);
  //   return results;
  // }

  constructor(private http: HttpClient) { }
}

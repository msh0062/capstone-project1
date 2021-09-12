import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Groups } from '../models/groups';
import { group } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  allGroups = 'http://localhost:8082/api/groups'
  byOrg = 'http://localhost:8082/api/groups/byorganization'


  jsonContentTypeHeaders = {
    headers: new HttpHeaders().set('Content-Type', 'application/json')  
  }

  getAllGroups(): Observable<Groups> {
    const results: Observable<Groups> = this.http.get<Groups>(this.allGroups);
    return results;
  }

  getGroupById(groupId: string): Observable<Groups> {
  const results: Observable<Groups> = this.http.get<Groups>(`${this.allGroups}/${groupId}`);
  return results ;
  }

  getGroupsByOrganizationId(OrganizationName:string): Observable<Groups> {
    const results: Observable<Groups> = this.http.get<Groups>(`${this.byOrg}/${OrganizationName}`);
    return results ;
    }

  addGroup(groups: Groups): Observable<Groups> {
    const results: Observable<Groups> = this.http.post<Groups>(this.allGroups, groups, this.jsonContentTypeHeaders);
    return results;
  }

  updateGroup(group: Groups): Observable<Groups> {
    const results: Observable<Groups> = this.http.put<Groups>(`${this.getAllGroups}`, group, this.jsonContentTypeHeaders);
    return results;
  }

  deleteGroupByID(groupId: string): Observable<Groups> {
    const results = this.http.delete<Groups>(`${this.allGroups}/${groupId}`);
    return results;
  }

  constructor(private http: HttpClient) { }
}

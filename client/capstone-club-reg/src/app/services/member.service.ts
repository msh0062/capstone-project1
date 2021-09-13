import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Members } from '../models/members';
import { GroupService } from './group.service';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  jsonContentTypeHeaders = {
    headers: new HttpHeaders().set('Content-Type', 'application/json')  
  }

  allGroups = 'http://localhost:8082/api/groups'

  addMember(groupId:string, member: Members): Observable<Members> {
    const results: Observable<Members> = this.http.post<Members>(`${this.allGroups}/${groupId}/members`, member, this.jsonContentTypeHeaders);
    return results;
    }

  constructor(private http: HttpClient) { }
}

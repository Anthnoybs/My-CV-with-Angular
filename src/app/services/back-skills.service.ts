import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BackSkillsService {
  constructor(private httpClient: HttpClient) { }
  getBackFromServer() {
    return this.httpClient
      .get<any[]>('http://localhost:3000/notes/back');
  }

}

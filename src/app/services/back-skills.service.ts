import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BackSkillsService {
  constructor(private httpClient: HttpClient) { }
  getBackFromServer() {
    return this.httpClient
      .get<any[]>('https://cvproject-e6e2a.firebaseio.com/backSkills.json');
  }

}

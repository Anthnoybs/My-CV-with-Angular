import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FrontSkillsService {
  constructor(private httpClient: HttpClient) {}
    getFrontFromServer() {
      return this.httpClient
        .get<any[]>('https://cvproject-e6e2a.firebaseio.com/frontSkils.json');
    }
}

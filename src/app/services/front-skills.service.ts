import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FrontSkillsService {
  constructor(private httpClient: HttpClient) {}
    getFrontFromServer() {
      return this.httpClient
        .get<any[]>('http://localhost:3000/notes/front');
    }
}

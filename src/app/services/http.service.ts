import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@Injectable() export class HttpService {
  private done = new BehaviorSubject(0);
  sendOK = this.done.asObservable();
  project =  [];
  param: any;


  constructor(private httpClient: HttpClient) { }

  saveMail(param: any ) {
    this.httpClient
      .post('https://cvproject-e6e2a.firebaseio.com/contacts.json', param)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
  getProjectsFromServer() {
    return this.httpClient
      .get<any[]>('http://localhost:3000/notes/project');
  }
  changeMessage() {
    this.done.next(1);
  }

}

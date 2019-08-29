import { Injectable } from '@angular/core';
import { SubmitClass } from '../submit-class';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
  export class PostServiceService {
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  }




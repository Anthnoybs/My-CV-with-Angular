import { Component, OnInit, Input } from '@angular/core';
import { PostServiceService } from '../services/post-service.service';
import { HttpService} from '../services/http.service';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['../app.component.scss']
})


export class PostComponentComponent implements OnInit {
  message: string;
  mail: string;
  tableau: any = [
  ];
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private data: PostServiceService , private HttpService: HttpService) { }
  // tslint:disable-next-line: variable-name
  onPost(_mail: string) {
    this.mail = _mail;
    this.tableau.push({ mail: this.mail , message: this.message });
    this.HttpService.saveMail( this.tableau);
    this.HttpService.changeMessage();
  }
  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
    this.HttpService.sendOK.subscribe();
  }

  }




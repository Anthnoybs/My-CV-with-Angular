import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../services/post-service.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-timeline-component',
  templateUrl: './timeline-component.component.html',
  styleUrls: ['./timeline-component.component.scss']
})



 export class TimelineComponentComponent implements OnInit {
  message: string;
  SendOK: any;
  bool: boolean;

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private data: PostServiceService, private HttpService: HttpService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
    this.HttpService.sendOK.subscribe(sendOK => this.SendOK = sendOK);
    this.SendMessage(this.SendOK);
  }

  SendMessage(sendOK: any) {
    if (sendOK === 0) {
      this.bool = true;
    } else {this.bool = false; }
  }

  newMessage(param: string) {
    this.data.changeMessage(param);
  }
}

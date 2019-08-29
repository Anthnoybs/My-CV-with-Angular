import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-project-component',
  templateUrl: './project-component.component.html',
  styleUrls: ['./project-component.component.scss']
})
export class ProjectComponentComponent implements OnInit {
  projectArray: any[];
  project: any;
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private HttpService: HttpService) { }

  ngOnInit() {
    this.HttpService.getProjectsFromServer()
      .subscribe(
        (response) => {
          this.projectArray = response;
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

}

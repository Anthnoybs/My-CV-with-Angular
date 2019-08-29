import { Component, OnInit } from '@angular/core';
import { BackSkillsService } from '../services/back-skills.service';

@Component({
  selector: 'app-back-skills-component',
  templateUrl: './back-skills-component.component.html',
  styleUrls: ['./back-skills-component.component.scss']
})
export class BackSkillsComponentComponent implements OnInit {
  backlist: any[];
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private BackSkillsService: BackSkillsService) {
   }

  ngOnInit() {
    this.BackSkillsService.getBackFromServer()
    .subscribe(
      (response) => {
        this.backlist = response;
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

}

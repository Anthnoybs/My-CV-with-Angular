import { Component, OnInit } from '@angular/core';
import { FrontSkillsService } from '../services/front-skills.service';

@Component({
  selector: 'app-front-skills-component',
  templateUrl: './front-skills-component.component.html',
  styleUrls: ['./front-skills-component.component.scss']
})
export class FrontSkillsComponentComponent implements OnInit  {
  frontlist: any[];
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private FrontSkillsService: FrontSkillsService) { }
  ngOnInit() {
    this.FrontSkillsService.getFrontFromServer()
      .subscribe(
        (response) => {
          this.frontlist = response;
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
  }


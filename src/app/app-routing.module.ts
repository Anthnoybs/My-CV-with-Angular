import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackSkillsComponentComponent } from './back-skills-component/back-skills-component.component';
import { FrontSkillsComponentComponent } from './front-skills-component/front-skills-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { TimelineComponentComponent } from './timeline-component/timeline-component.component' ;
import {  ProjectComponentComponent} from './project-component/project-component.component';
import { XpComponentComponent } from './xp-component/xp-component.component';
import { PostComponentComponent } from './post-component/post-component.component';

const routes: Routes = [
  { path: 'timeline', component: TimelineComponentComponent },
  { path: 'front', component: FrontSkillsComponentComponent },
  { path: 'back', component: BackSkillsComponentComponent },
  { path: 'about', component: AboutComponentComponent },
  { path: 'project', component: ProjectComponentComponent },
  { path: 'xp', component: XpComponentComponent },
  { path: 'post', component: PostComponentComponent },
  { path: '', component: TimelineComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { TimelineComponentComponent } from './timeline-component/timeline-component.component';
import { FrontSkillsComponentComponent } from './front-skills-component/front-skills-component.component';
import { BackSkillsComponentComponent } from './back-skills-component/back-skills-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { ProjectComponentComponent } from './project-component/project-component.component';
import { XpComponentComponent } from './xp-component/xp-component.component';
import { PostComponentComponent } from './post-component/post-component.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    TimelineComponentComponent,
    FrontSkillsComponentComponent,
    BackSkillsComponentComponent,
    AboutComponentComponent,
    ProjectComponentComponent,
    XpComponentComponent,
    PostComponentComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

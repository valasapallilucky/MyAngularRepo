import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from './components/home/home.component';
import { JSProgrammingComponent } from './components/javascript-programming/js-programming.component';
import { JsTheoryInterviewComponent } from './components/js-theory-interview/js-theory-interview.component';
import { AngularIntrvwQuestComponent } from './components/angular-intrvw-quest/angular-intrvw-quest.component';
import { HtmlIntrvwQuestComponent } from './components/html-intrvw-quest/html-intrvw-quest.component';
import { CssIntrvwQuestComponent } from './components/css-intrvw-quest/css-intrvw-quest.component';

const routes: Routes = [
    {path:'', component: ToolbarComponent, 
    children:[
    {path:'', component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path:'js-programs', component:JSProgrammingComponent},
    {path:'js-theory', component:JsTheoryInterviewComponent},
    {path:'angular', component:AngularIntrvwQuestComponent},
    {path:'html', component:HtmlIntrvwQuestComponent},
    {path:'css', component:CssIntrvwQuestComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

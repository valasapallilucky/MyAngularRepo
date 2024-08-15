import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OutputComponent } from './components/output/output.component';
import { JsTheoryInterviewComponent } from './components/js-theory-interview/js-theory-interview.component';
import { AngularIntrvwQuestComponent } from './components/angular-intrvw-quest/angular-intrvw-quest.component';
import { HtmlIntrvwQuestComponent } from './components/html-intrvw-quest/html-intrvw-quest.component';
import { CssIntrvwQuestComponent } from './components/css-intrvw-quest/css-intrvw-quest.component';
import { JSProgrammingComponent } from './components/javascript-programming/js-programming.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    OutputComponent,
    JSProgrammingComponent,
    JsTheoryInterviewComponent,
    AngularIntrvwQuestComponent,
    HtmlIntrvwQuestComponent,
    CssIntrvwQuestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-js-theory-interview',
  templateUrl: './js-theory-interview.component.html',
  styleUrl: './js-theory-interview.component.scss',
})
export class JsTheoryInterviewComponent {
  constructor(private http: HttpClient) { }
  quesArr: any[] = [];
  getAnswer(item: any, ind: any) {
    this.quesArr[ind].isAsked = true;
  }
  ngOnInit() {
      this.http.get<any[]>('assets/js-theory.json').subscribe(res => {
        this.quesArr = res;
      })
  }
}

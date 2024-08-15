import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-intrvw-quest',
  templateUrl: './angular-intrvw-quest.component.html',
  styleUrl: './angular-intrvw-quest.component.scss'
})
export class AngularIntrvwQuestComponent {
  quesArr: any[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('assets/angular18.json').subscribe(res => {
      this.quesArr = res;
    })
  }
  getAnswer(item: any, ind: any) {
    this.quesArr[ind].isAsked = true;
  }
}

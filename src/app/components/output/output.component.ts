import { Component, Input } from '@angular/core';
import { AnySrvRecord } from 'node:dns';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrl: './output.component.scss'
})
export class OutputComponent {
  @Input() maxResult!: number;
  inputNumber!: number;
  result!: number;
  input!: number;
  anagramVal1: string = ''; anagramVal2: string = '';
  anagramResult: string = '';
  factTitle: string = 'Factorial';
  PallendromeTitle: string = 'Pallendrome'
  checkAnangram: string = 'Check anagram'
  tables: string = 'Math Tables';
  pallendrome:string='';
  pallendromeResult:string='';
  tabArr: any[] = [];
  tableLength!: number;
  ngOnInit() {

  }
  checkFactorial(val: number) {
    let fact: number = 1;
    console.log(val);
    for (let i = 1; i <= val; i++) {
      fact = fact * i;
    }
    this.result = fact;
  }

  checkAnagram() {
    //this.anagramVal1 = val;
    //this.anagramResult = this.anagramVal;
    if (this.anagramVal1 && this.anagramVal2) {
      let str1 = this.anagramVal1.split('').sort().join('');
      let str2 = this.anagramVal2.split('').sort().join('');
      console.log(str1 === str2)
      if (str1 === str2)
        this.anagramResult = 'Anagrams';
      else
        this.anagramResult = 'not an anagrams';
    }

  }
  displayTables() {
    let n = 2
    let arr: any[] = []
    for (let i = 1; i <= this.input; i++) {
      arr = []
      for (let j = 1; j <= this.tableLength; j++) {
        arr.push(i + '*' + j + '=' + i * j);
      }
      this.tabArr.push(arr);
    }
  }
  checkPallendrome(input:any){
    let palString='';
    for(let i = input.length-1;i >=0; i--){
      palString += input[i];
    }
    if(palString === input)
      this.pallendromeResult = "Given string is pallendrome."
    else
    this.pallendromeResult = "Given is not Pallendrome."
  }
}



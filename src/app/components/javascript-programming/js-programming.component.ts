import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-js-programming',
  templateUrl: './js-programming.component.html',
  styleUrl: './js-programming.component.scss'
})
export class JSProgrammingComponent {
programsList =['Find Largest Number', 'anagram', 'merge arrays', 'sort arrays', 'Spread Operator', 'Rest Operator', 'Array reverse', 'display 10 tables'
  ,'Reverse a String', 'Palindrome Check', 'Sum of All numbers in array', 'Fibonacci Sequence', 
  'Remove Array Duplicates','merge sorted array', 'Flatten nested Array', 'Deep clone the object', 'Throttle','Debounce'
]
inputNumber!:number;
result!:number;
numericArr = [3,6,29,52,2,5,10,2,6,3,45,10];
maxResult!:number;
str:string ="madam";
ngOnInit(){
}
  executeProgram(program:any){
    if(program === 'Find Largest Number'){
      this.findMaxValue();
    }else if(program === 'anagram'){
      this.checkAnagramOrNot()
    }else if(program === 'merge arrays'){
      this.mergeMultpleArrays();
    }else if(program === 'sort arrays'){
      this.sortAscendingDescedingOrder();
    }else if(program === 'display 10 tables'){ 
      this.getTables();
    }else if(program === 'Spread Operator'){
      this.spreadOrRestExample();
    }else if(program === 'Rest Operator'){
      this.spreadOrRestExample();
    }else if(program === 'Reverse a String'){
      this.stringReverse();
    }else if(program === 'Palindrome Check'){
      this.checkPallendrome();
    }else if(program === 'Fibonacci Sequence'){
    }else if(program === 'Flatten nested Array'){
    }
  }
  getTables(){

  }
  checkPallendrome(){
    let str2:string=''
    for(let i=this.str.length -1 ; i>=0; i--){
      str2 = str2 + this.str[i];
      console.log(str2 + this.str[i])
    }
    if(this.str === str2){
      console.log("pallendrome", str2)
    }else{
      console.log("not pallendrome");
    }
  }
  stringReverse(){
    let str = "hello";
    let str1 = str.split('').reverse().join('');
    console.log(str1);
    let reverseString:string='';
    for(let i = str.length-1; i>=0;i--){
      reverseString += str[i];
    } 
      console.log(reverseString);
  }
  
  sortAscendingDescedingOrder(){
    for(let i =0; i<this.numericArr.length; i++){
      for(let j=0; j<this.numericArr.length;j++){
        console.log(this.numericArr[i], this.numericArr[j]);
        if(this.numericArr[i] > this.numericArr[j]){
          let temp = this.numericArr[i];
          this.numericArr[i] = this.numericArr[j]
          this.numericArr[j]=temp;
        }
      }
    }
    console.log(this.numericArr,"sorted arrays", [...new Set(this.numericArr)]);

  }
  mergeMultpleArrays(){

  }
  checkAnagramOrNot(){

  }
  findMaxValue(){
    let currVal = this.numericArr[0];
    let maxVal:number;
    //one way
    for(let i =1; i<this.numericArr.length; i++){
      if(currVal > this.numericArr[i]){
        maxVal = currVal;
      }else{
        currVal= this.numericArr[i];
      }
    }
    this.maxResult = currVal;
   // second way
//   this.maxResult = Math.max(...this.numericArr)
  }

  spreadOrRestExample(){
    //spread
    let arr1 = [1,2,3]
    let arr2 = [4,5];
    let obj1 = {a:1,b:2}
    let obj2 = {c:3,d:4}
    let obj3 = {...obj1,...obj2}
    let arr3 = [...arr1, ...arr2]
    console.log("array/object merge", arr3, obj3);
    arr3 = [...arr2];
    console.log("array copy", arr3);

    //Rest operator to gather argument
    console.log(this.joinStrings('Hello', 'world', '!'));
  }
  joinStrings(...strings:any){
    return strings.join(' ');
  }


}

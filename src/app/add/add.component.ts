import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getNew();
    var comment = document.getElementById("comment");
    comment.style.display = "none";
  }

  answer: number = 0;
  qMax: number = 6;
  qMin: number = 1;

  qList: number[] = [];
  aList: number[] = [];

  getArray(num) {
    return new Array(num);
  }

  getRandom(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  getQNext(no: number) {
    var n = no;
    while (no == n) {
      n = this.getRandom(this.qMax, this.qMin);
    }

    return n;
  }

  getNew() {
    this.qList = [];
    this.aList = [];
    var comment = document.getElementById("comment");
    comment.style.display = "none";

    this.qList.push(this.getQNext(0));
    this.qList.push(this.getQNext(0));

    this.answer = this.qList[0] + this.qList[1];

    //add numbers around answer
    this.aList.push(this.answer - 2);
    this.aList.push(this.answer - 1);
    this.aList.push(this.answer + 1);
    this.aList.push(this.answer + 2);

    //remove two random
    this.shuffle(this.aList)
    this.aList = this.aList.splice(0, 2);

    //add answer
    this.aList.push(this.answer);
    this.aList.sort();
  }

  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  checkAnswer(n) {
    if (n == this.answer) {
      console.log("great job" + this.answer);
      var comment = document.getElementById("comment");
      comment.innerHTML = "Great!";
      comment.style.display = "block";
    }
    else {
      console.log("try it again");
      var comment = document.getElementById("comment");
      comment.innerHTML = "Oops!";
      comment.style.display = "block";
    }
  }

}

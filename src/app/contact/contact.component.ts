import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  message: string = "Thank you for contacting us. We will respond to you shortly !"

  constructor() { }

  ngOnInit() {
    var comment = document.getElementById("comment");
    comment.style.display = "none";
  }

  register(form) {
    //console.log(form.value);
  }

  resetForm(form: NgForm) {
    form.resetForm();
  }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false

    var comment = document.getElementById("comment");
    comment.innerHTML = this.message;
    comment.style.display = "block";
  }
}

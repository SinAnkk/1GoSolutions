import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts= {
    name: null,
    mobile: null,
    email: null,
    comment: null
  }

  constructor() { }

  ngOnInit() {
  }

  sendMail(contact){
    console.log(contact);
  }

}

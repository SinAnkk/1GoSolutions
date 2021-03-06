import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  private url= "http://localhost:8080/1GoSolutions/addContact" ;
  contacts = {
    name: null,
    mobile: null,
    email: null,
    comment: null
  }

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  sendMail(contact) {
    return this.httpClient.post(this.url, contact).subscribe(data => {
      console.log(data);
      this.router.navigate(['/home']);
    },
      error => {
        console.log("Error", error);
        
      });
   
  }

}

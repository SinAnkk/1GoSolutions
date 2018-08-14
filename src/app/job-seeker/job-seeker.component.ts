import { Component, OnInit } from '@angular/core';
import { Candidate } from '../models/candidate.model';

@Component({
  selector: 'app-job-seeker',
  templateUrl: './job-seeker.component.html',
  styleUrls: ['./job-seeker.component.css']
})
export class JobSeekerComponent implements OnInit {
  candidate: Candidate = {
    designation: null,
    email: null,
    experience:null,
    id: null,
    industry: null,
    location: null,
    mobile: null,
    name: null,
    organisation: null,
    salary: null
  };

  constructor() { }

  ngOnInit() {
  }

  saveCandidate(newCandidate: Candidate){
    console.log(newCandidate)
  }

}

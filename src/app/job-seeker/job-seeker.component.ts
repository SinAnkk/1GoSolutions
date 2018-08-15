import { Injectable , Component, OnInit } from '@angular/core';
import { Candidate } from '../models/candidate.model';
import { ApiService } from './api.service';



@Component({
  selector: 'app-job-seeker',
  templateUrl: './job-seeker.component.html',
  styleUrls: ['./job-seeker.component.css']
})
@Injectable({
  providedIn:  'root'
  })
export class JobSeekerComponent implements OnInit {
  candidate: Candidate = {
    designation: null,
    email: null,
    experience:null,
    industry: null,
    location: null,
    mobile: null,
    name: null,
    organisation: null,
    salary: null
  };

  constructor(private  apiService:  ApiService){};

  ngOnInit() {
  }

  saveCandidate(){
    //console.log(this.httpClient.get(this.getUrl));
    this.apiService.saveCandidate(this.candidate).subscribe(data=>{
      console.log(data);
    },
    error => {
        console.log("Error", error);
    });

}
}

import { Injectable , Component, OnInit } from '@angular/core';
import { Candidate } from '../models/candidate.model';
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';
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
    salary: null,
    resumeLink: null
  };

  selectedFiles: FileList
  currentFileUpload: File
  progress: { percentage: number } = { percentage: 0 }
  constructor(private  apiService:  ApiService){};

  ngOnInit() {
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress.percentage = 0;
 
    this.currentFileUpload = this.selectedFiles.item(0)
    this.apiService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!', event);
        this.candidate.resumeLink = JSON.stringify(event.body);
        console.log(this.candidate.resumeLink);
      }
    })
 
    this.selectedFiles = undefined;
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

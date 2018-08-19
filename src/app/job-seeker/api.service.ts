import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Candidate } from '../models/candidate.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url= "http://localhost:8080/1GoSolutions/addCandidate" ;
  private uploadUrl = "http://localhost:8080/1GoSolutions/uploadResume";
  private getUrl = "http://localhost:8080/1GoSolutions/welcome";
  constructor(private httpClient : HttpClient) { }

  saveCandidate(newCandidate: Candidate){
    //return this.httpClient.get(this.getUrl);
    return this.httpClient.post(this.url, newCandidate);
  }

  pushFileToStorage(file: File){
    let formdata: FormData = new FormData();
 
    formdata.append('file', file);
 
    const req = new HttpRequest('POST', this.uploadUrl, formdata, {
      reportProgress: true,
      responseType: 'text'
    });
 
    return this.httpClient.request(req);

  }
}

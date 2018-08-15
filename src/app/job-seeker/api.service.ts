import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Candidate } from '../models/candidate.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url= "http://localhost:8080/1GoSolutions/addCandidate" ;
  private getUrl = "http://localhost:8080/1GoSolutions/welcome";
  constructor(private httpClient : HttpClient) { }

  saveCandidate(newCandidate: Candidate){
    //return this.httpClient.get(this.getUrl);
    return this.httpClient.post(this.url, newCandidate);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'; 

@Injectable()
export class ServerService {

  constructor(private http: HttpClient) { }

  getVegtables() {
  	return this.http.get("./assets/data/vegtables.json", {observe: "response"})
  }

}

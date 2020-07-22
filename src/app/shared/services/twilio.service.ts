import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {InitialConvo} from '../models/initial-convo';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class TwilioService {
  startConvoUrl = 'https://x38gylh92e.execute-api.us-east-2.amazonaws.com/dev/api/start-conversation';
  constructor(private http: HttpClient) { }

  sendInitialMessage(initialConvo: InitialConvo){
    console.log('sending initial message to lambda=', initialConvo);
    JSON.stringify(initialConvo);
    return this.http.post(`${this.startConvoUrl}`, initialConvo, httpOptions);
  }
}

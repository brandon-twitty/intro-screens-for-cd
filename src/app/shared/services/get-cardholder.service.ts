import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class GetCardholderService {
  userUrl = 'https://x38gylh92e.execute-api.us-east-2.amazonaws.com/dev/api/get-user-by-card-id';
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:variable-name
  public getUserByCardId(card_id) {
    console.log('users card id', `${card_id}`);
    return this.http.get(`${this.userUrl}/${card_id}`, httpOptions);

  }
}

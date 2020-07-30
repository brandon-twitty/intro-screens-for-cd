import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import { User } from "../models/User";
import {tap} from "rxjs/operators";

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class GetCardholderService {
    userUrl = 'https://x38gylh92e.execute-api.us-east-2.amazonaws.com/dev/api/get-user-by-card-id';

    constructor(private http: HttpClient) {
    }

    // public getUserByCardId(cardId: any) {
    //   JSON.stringify(cardId);
    //   console.log('users card id', `${cardId}`);
    //   return this.http.get(`${this.userUrl}/${cardId}`, httpOptions);
    //
    // }
    public getUserByCardId(cardId): Observable<User> {
        console.log(`${cardId.cardId}`);
        return this.http.get<User>(`${this.userUrl}/get-user-by-card-id/${cardId.cardId}`, httpOptions).pipe(tap(_ => console.log(User)));
    }
}

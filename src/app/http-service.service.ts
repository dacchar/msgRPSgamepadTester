import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { GameElement } from './game-element.enum';


export interface GamepadHit {
  timestamp: number;
  hit: number;
}


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  clearHits = 'http://localhost:3000/msgRPS/clearGamepadHit';
  setHit = 'http://localhost:3000/msgRPS/setGamepadHit';

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private httpClient: HttpClient) { }

  public clearGamepad(): Observable<GamepadHit> {
    return this.httpClient.get<GamepadHit>(this.clearHits);
  }

  public sendGamepadHit(gameElement: GameElement): Observable<GamepadHit> {
    return this.httpClient.post<GamepadHit>(
      this.setHit,
      {
        timestamp: Date.now(),
        hit: gameElement
      }
      // this.httpOptions
    );
  }
}

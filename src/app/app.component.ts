import {Component, OnInit} from '@angular/core';
import { HttpServiceService } from './http-service.service';
import { GameElement } from './game-element.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gamepadTester';

  constructor(
    private httpServiceService: HttpServiceService
  ) {
  }

  ngOnInit() {
  }

  clickRock() {
    this.httpServiceService.sendGamepadHit(GameElement.Rock).subscribe(gamepadHit => {
    });
  }

  clickPaper() {
    this.httpServiceService.sendGamepadHit(GameElement.Paper).subscribe(gamepadHit => {
    });
  }

  clickScissors() {
    this.httpServiceService.sendGamepadHit(GameElement.Scissors).subscribe(gamepadHit => {
    });
  }
}

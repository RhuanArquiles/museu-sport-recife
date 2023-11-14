import { Component } from '@angular/core';
import { trophyData } from './trophy-data';

@Component({
  selector: 'app-trophy',
  templateUrl: './trophy.component.html',
  styleUrls: ['./trophy.component.css']
})
export class TrophyComponent {
  trophyList = trophyData ;
}

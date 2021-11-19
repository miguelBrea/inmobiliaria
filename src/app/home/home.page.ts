import { Component } from '@angular/core';
import { InmoService } from '../services/inmo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public inmoService: InmoService) {}

}

import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { DataService } from './services/data.service';
import { Observable, Subscription } from 'rxjs';
import { Topping } from './models/topping';
import { FlickrPhoto } from './models/flickr-photo';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor() {

  }



}
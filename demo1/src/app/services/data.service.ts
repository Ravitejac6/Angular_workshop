import { Injectable } from '@angular/core';
import { Topping } from '../models/topping';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { FlickrPhoto } from '../models/flickr-photo';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  get_toppings():Observable<Topping[]> {
    console.log("In Data Service");
    return this.http.get<Topping[]>(
      `${environment.serverurl}/pizzaa/toppings/`).pipe(
      map(a => a.map(t=>{return new Topping(t.name, t.imageurl, t.cost)})
      )
    );
  }

  get_flickr_photolist(tag: string): Observable<FlickrPhoto[]>{
    let key = '47d0277091bba054131fd20543a3a4d5';
    let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${tag}&format=json&nojsoncallback=?`
    return this.http.get<FlickrPhoto[]>(url).pipe(
      map(a => {
        let x:Array<FlickrPhoto> = [];
        a['photos'].photo.forEach(p => {
          if(p.farm>0)
          x.push(new FlickrPhoto(p))
        });
        return x;
      }
    ));
  }
}
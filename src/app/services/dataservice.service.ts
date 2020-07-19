import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cities } from './../models/cities';
import { Devices } from '../models/devices';


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  ApiCities =  'https://patatas-air.s3.amazonaws.com/cities';
  ApiDevices = 'https://patatas-air.s3.amazonaws.com/devices';

  constructor(private http: HttpClient) { }

  public getCities(): Observable<Cities[]> {
    return  this.http.get<Cities[]>
                    (this.ApiCities);
  }

  public getDevices(): Observable<Devices[]> {
    return  this.http.get<Devices[]>
                    (this.ApiDevices);
  }

}


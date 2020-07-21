import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../services/dataservice.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})

export class SummaryComponent implements OnInit {

  devices: any = [];
  cities: any = [];
  totalAlert = 0;
  totalWarning = 0;
  totalNormal = 0;

  constructor(private dataService: DataserviceService) { }

  ngOnInit(): void {
  this.getCities();
  this.getDevices();
  }

  getDevices(){
  this.dataService.getDevices()
    .subscribe((data: any ) => {
    this.devices = data;
    this.deviceName();
  });
  }

  getCities(){
  this.dataService.getCities()
    .subscribe( (data: any) => {
    const alert = (data.map((result) => {
    return (result.AlertDevicesCount);
    }));
    const warning = (data.map((result) => {
    return result.WarningDevicesCount;
    }));
    const normal = (data.map((result) => {
    return result.NormalDevicesCount;
    }));
    this.totalAlert = (alert.reduce((a, b) => a + b, 0));
    this.totalWarning = (warning.reduce((a, b) => a + b, 0));
    this.totalNormal = (normal.reduce((a, b) => a + b, 0));
  });
  this.dataService.getCities()
    .subscribe( (data: any ) => {
    this.cities = data;
    });
  }

  deviceName(): any {
  this.devices.map((device: any) => {
  device.CityId = this.dataService.getCityNameById(device.CityId, this.cities);
  });
}
}


import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../services/dataservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cities: any = [];

  constructor(private dataService: DataserviceService) { }

  ngOnInit(): void {
    this.getCities();
  }

  getCities() {
    this.dataService.getCities()
    .subscribe( (data: any) => {
      this.cities = data;
    });
  }
}

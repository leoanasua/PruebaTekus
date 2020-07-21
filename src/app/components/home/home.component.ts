import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../services/dataservice.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cities: any = [];
  langs: string [] = [];

  constructor(private dataService: DataserviceService, private translate: TranslateService) {
  this.translate.setDefaultLang('en');
  this.translate.use('en');
  this.translate.addLangs(['en', 'es', 'fr']);
  this.langs = this.translate.getLangs();
  }

  changeLang(lang: string) {
  this.translate.use(lang);
  }

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

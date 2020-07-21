import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tekus';
  langs: string [] = [];

  constructor(private translate: TranslateService){
    this.translate.setDefaultLang('en'); // Selecting default language
    this.translate.use('es'); // language in which page will be translated
    this.translate.get('Name') // cheking translations from component by console
    .subscribe ((res: string) => {
    console.log(res);
    });
  }
}

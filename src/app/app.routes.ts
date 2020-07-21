import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SummaryComponent } from './components/summary/summary.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'summary', component: SummaryComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

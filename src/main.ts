import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { AboutComponent } from './app/about/about.component';

import { AppComponent } from './app/app/app.component';
import { TasksComponent } from './app/tasks/tasks.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const routes: Route[] = [
  { path: '', component: TasksComponent },
  { path: 'about', component: AboutComponent },
];

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(RouterModule.forRoot(routes))],
});

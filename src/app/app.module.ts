import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MvcComponent } from './mvc/mvc.component';
import { Angular2Component } from './angular2/angular2.component';
import { MvcDetailComponent } from './mvc-detail/mvc-detail.component';

const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'mvc',      component: MvcComponent ,
      children: [
          {
            path: ':id',
            component: MvcDetailComponent
          }
        ]

  },
  { path: 'angular2',      component: Angular2Component },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PageNotFoundComponent,
    MvcComponent,
    Angular2Component,
    MvcDetailComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

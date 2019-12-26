import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, 
     RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'products/:productId', component: BlogViewComponent },
    ])
  ],
  declarations: [ AppComponent, HomeComponent, BlogViewComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

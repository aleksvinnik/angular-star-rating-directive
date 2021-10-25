import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RatingDirective } from './directives/rating.directive';


@NgModule({
  declarations: [
    AppComponent,
    RatingDirective,
   
    
    
  ],
  imports: [
    
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

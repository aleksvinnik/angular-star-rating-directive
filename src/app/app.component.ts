import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'rating';
  rating: number=0;
  constructor(){
    
  }
  getRating(rating:number){
    this.rating=rating;
  }
}

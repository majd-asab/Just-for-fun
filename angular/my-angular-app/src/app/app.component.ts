import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // you can use also inline templating"template: <h1>blabla</h1>"
  // the same goes for style but they have to be in an array
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  rc ={
    status:0
  }
  onStrategySelect(event: any){
    let selection = event.target.value;

  }
}

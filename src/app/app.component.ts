import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  variableHeader: string = 'recipes';

  onClickHeader(parametro: string) {
    this.variableHeader = parametro;   
  }

}

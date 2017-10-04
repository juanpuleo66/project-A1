import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnInit {
  public titulo: string = 'NGZOO';
  emailContact: string;

  ngOnInit() {
    // this.emailContact = localStorage.getItem('emailContact');
  }

  ngDoCheck() {
    this.emailContact = localStorage.getItem('emailContact');
  }

  onClickButtonEliminarEmailContacto() {
    localStorage.removeItem('emailContact');
  }
}

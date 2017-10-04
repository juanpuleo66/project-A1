import { Component } from '@angular/core';

@Component({
    selector: 'app-keepers',
    templateUrl: 'keepers.component.html'
})
export class KeepersComponent {             
  public titulo: string = 'keepers.component';
    
  ngOnInit() {
    console.log(this.titulo +' cargado');
    let emailContact = localStorage.getItem('emailContact');
    console.log('emailContact: '+emailContact);
  }
}
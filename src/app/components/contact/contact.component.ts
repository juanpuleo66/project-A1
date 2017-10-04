import { Component, OnInit } from '@angular/core';

@Component ({
    selector: 'app-contact',
    templateUrl: 'contact.component.html'
})
export class ContactComponent implements OnInit {
    public titulo: string = 'contact.component'
    public emailContact: string;
    
    ngOnInit() {
        console.log(this.titulo +' cargado');
    }

    onClickButton(){
        console.log('emailContact: '+this.emailContact);
        localStorage.setItem('emailContact', this.emailContact);
    }
}
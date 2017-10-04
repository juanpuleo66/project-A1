import { Component } from '@angular/core';

@Component({
    selector: 'app-guardar-email',
    template: `
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h4>{{title}}</h4>
                    <label for="emailContact">Email Contact</label>
                    <input 
                        class="form-control" 
                        type="text" 
                        name="emailContact" 
                        [(ngModel)]="emailContact"
                    >
                    <button (click)="onGuardarEmail()" class="btn btn-primary">Send Email</button>
                </div>
            </div>
        </div>
    `
})
export class GuardarEmailComponent {
    public title: string = "guardar-email.component";
    public emailContact: string;

    onGuardarEmail(){
        localStorage.setItem('emailContact', this.emailContact);
    }
}
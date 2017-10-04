import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-jquery',
    templateUrl: 'jquery.component.html'
})
export class JqueryComponent implements OnInit {
    titulo: string;

    constructor() {
        this.titulo = 'jquery.component';
    }
    ngOnInit() {
        $('#textojq').hide();
        $('#botonjq').click(function(){
            $('#textojq').slideToggle();

            let valueText = ( $('#botonjq').text() == 'Mostrar texto' ) ? 'Ocultar texto' : 'Mostrar texto';
            $('#botonjq').text(valueText);
        })
        $('#caja').dotdotdot({});
    }
}
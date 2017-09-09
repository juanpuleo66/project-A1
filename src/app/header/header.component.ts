import { Component, OnChanges, OnInit, OnDestroy, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html', 
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnChanges, OnInit, OnDestroy {
    @Output() eventHeader = new EventEmitter<string>();

    contructor() {}
    ngOnChanges() {}
    ngOnInit() {}
    ngOnDestroy() {}

    onClickHeader(parametro: string) {
        this.eventHeader.emit(parametro);  
    }

}
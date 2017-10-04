import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminRoutingModule } from './admin-routing.module';

import { MainComponent } from './components/main/main.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
    imports: [CommonModule, FormsModule, HttpModule, AdminRoutingModule],
    declarations: [
        MainComponent, AddComponent, EditComponent, ListComponent
    ],
    exports: [],
    providers: []
})
export class AdminModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainEmailComponent } from './components/main-email/main-email.component';
import { GuardarEmailComponent } from './components/guardar-email/guardar-email.component';
import { MostrarEmailComponent } from './components/mostrar-email/mostrar-email.component';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [
        MainEmailComponent, GuardarEmailComponent, MostrarEmailComponent
    ],
    exports: [MainEmailComponent]
})
export class ModuleEmailModule { }

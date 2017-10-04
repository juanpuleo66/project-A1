import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './components/home/home.component';
import { NoFoundComponent } from './components/nofound/nofound.component';
import { JqueryComponent } from './components/jquery/jquery.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeepersComponent } from './components/keepers/keepers.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { EditorSimpleTinyComponent } from './components/editor-simple-tiny/editor-simple-tiny.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'jquery', component: JqueryComponent },
    { path: 'animals', component: AnimalsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'keepers', component: KeepersComponent },
    { path: 'tienda', component: TiendaComponent },
    { path: 'editorsimpletiny', component: EditorSimpleTinyComponent },
    { path: '**', component: NoFoundComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);



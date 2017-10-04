import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

// se importan los modulos
import { ModuleEmailModule } from './modules/module-email/moduleemail.module';
import { AdminModule } from './modules/admin/admin.module';

// se importan los componentes
import { AppComponent } from './app.component';
import { SimpleTinyComponent } from './components/simple-tiny/simple-tiny.component';
import { HomeComponent } from './components/home/home.component';
import { NoFoundComponent } from './components/nofound/nofound.component';
import { JqueryComponent } from './components/jquery/jquery.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ParquesComponent } from './components/parques/parques.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeepersComponent } from './components/keepers/keepers.component';
import { EditorSimpleTinyComponent } from './components/editor-simple-tiny/editor-simple-tiny.component';

@NgModule({
  declarations: [
    AppComponent, SimpleTinyComponent,
    HomeComponent, NoFoundComponent, 
    JqueryComponent, EditorSimpleTinyComponent,
    TiendaComponent, ParquesComponent, AnimalsComponent, ContactComponent, KeepersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ModuleEmailModule,
    AdminModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

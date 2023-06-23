import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { contadorComponent } from './contador/contador.component';
import { BotonesComponent } from './botones/botones.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BuclesComponent } from './bucles/bucles.component';
import { SwitchComponent } from './switch/switch.component';
import { MesesComponent } from './meses/meses.component';
import { DiaComponent } from './dia/dia.component';
import { FormulariodosComponent } from './formulariodos/formulariodos.component';
import { FormsModule } from '@angular/forms';//Se importa

@NgModule({
  declarations: [
    AppComponent,
    contadorComponent,
    BotonesComponent,
    FormularioComponent,
    BuclesComponent,
    SwitchComponent,
    MesesComponent,
    DiaComponent,
    FormulariodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

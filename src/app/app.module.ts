import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component'; //asi es como se importa los componentes
import { FormsModule } from '@angular/forms';
import { HermanoComponent } from './hermano/hermano.component';
import { EstiloHermanosDirective } from './estilo-hermanos.directive';
import { MiPipePersonalizadoPipe } from './mi-pipe-personalizado.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    HijoComponent,
    HermanoComponent,
    EstiloHermanosDirective,
    MiPipePersonalizadoPipe //nombre del componente
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

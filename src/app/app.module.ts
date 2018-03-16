import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TiendaComponent } from './tienda/tienda.component';
import { ProductosService } from './providers/productos.service';


@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

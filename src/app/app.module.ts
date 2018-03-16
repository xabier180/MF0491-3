import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TiendaComponent } from './tienda/tienda.component';
import { ProductosService } from './providers/productos.service';

import { FormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { FilterPipe } from './providers/pipes/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    TiendaComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HttpClientModule,
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

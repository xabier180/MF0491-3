import { Component, OnInit } from '@angular/core';
import {ProductosService} from '../providers/productos.service';
import { Producto } from '../model/producto';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent implements OnInit {

  productos: Producto[];
  nombre: string;
  producto_seleccionado: Producto;
  nuevaTarea : string;

  constructor(public productosService:ProductosService) {

    this.nombre = "Producto";

    console.log('ProductosComponent constructor');

   }

  ngOnInit() {
    this.cargarProductos();
    console.log('ProductosComponent ngOnInit');
  }

  cargarProductos(){
    console.log('ProductosComponent cargarProductos');
    this.productos = [];
    this.productosService.getProductos().subscribe(
      resultado => {
        console.debug('peticion correcta %o', resultado);
        this.mapeo(resultado);
      },
      error=>{
        console.warn('peticion incorrecta %o', error);
      }
    );
  }

  /**
   * Mapea los Datos en formato Json a Todo que proviene del Servicio Rest
   * @param resultado : any 
   */
  mapeo( result : any ){

    let producto:Producto;
    result.forEach(el => {
        producto = new Producto( el.descripcion );
        producto.foto = el.foto;
        casa.precio = el.precio;
        casa.habitaciones = el.habitaciones;
        casa.foto = el.foto;
        casa.alquiler = el.alquiler;
        casa.direccion = el.direccion;
        casa.servicios = el.servicios;
        
       /* el.servicios.forEach( el => {
          s = new Servicio(  );
          s.nombre = el.servicios.nombre;
          casa.servicios.push(s);
        }
      ) */

        this.casas.push(casa);
    });

  }

}

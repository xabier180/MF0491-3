import { Component, OnInit } from '@angular/core';
import {ProductosService} from '../providers/productos.service';
import { Producto } from '../model/producto';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent implements OnInit {

  productos: Array<Producto>;
  
  producto_seleccionado: Producto;
  

  constructor(public productosService:ProductosService) {

    this.producto_seleccionado = new Producto('', '', 2, '', true, 1);
    this.productos = new Array<Producto>();

    console.log('ProductosComponent constructor');

   }

  ngOnInit() {
    console.log('productos')
    this.productos = this.productosService.getProductos(); 
  
  }

  recibirProducto(event){
    console.log('ConcesionarioComponent: recibirProducto %o %i', event.producto);               
    this.producto_seleccionado = event.producto;   
  }

  sumarProducto(){
    console.log('Click sumarProducto');
    this.producto_seleccionado.numero_productos++;
  }
  

  

}

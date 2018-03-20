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

  numero_productos: number;
  

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

  sumarProducto(producto_suma:Producto){
    console.log('Click sumarProducto');
    producto_suma.numero_productos = producto_suma.numero_productos+1;
  }

  restarProducto(producto_resta:Producto){
    if(producto_resta.numero_productos>1){
    console.log('Click sumarProducto');
    producto_resta.numero_productos = producto_resta.numero_productos-1;
  }
  }
  

  

}

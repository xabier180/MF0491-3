import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';
import { MOCKS_PRODUCTOS } from './mocks.productos';
import { element } from 'protractor';

@Injectable()
export class ProductosService {

  constructor() {
    console.log('ProductosService constructor');
   }

   /** 
   * Retorna todos los productos que tenemos en productos_disponibles
  */

 getProductos():Producto[]{
  console.log('ProductosService getAll');
  let productos:Producto[] = [];
  let producto;
  
  let jsonData = JSON.parse(MOCKS_PRODUCTOS.productos_disponibles);

  jsonData.forEach( element => {
    
      producto = new Producto( 
                        element.descripcion, 
                        element.foto, 
                        element.precio,
                        element.precio_litro,
                        element.oferta,
                        element.numero_productos
                        );

      productos.push(producto);

  });

  return productos;
}


}

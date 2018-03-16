import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../../model/producto';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

 /**
  * Filtro para buscar en una coleccion de productos. No es CaseSensitive
  * @param productos : Producto[]
  * @param searchText : string con la marca o nombre del producto
  */

  transform(productos: Producto[], searchText: string): Producto[] {

    if(!productos) return [];
    if(!searchText) return productos;

   


    //Filtro por nombre o descripcion
    searchText = searchText.toLowerCase();
    let nombre = "";
    return productos.filter( todoIt => {
        nombre =  todoIt.descripcion;
        return nombre.toLowerCase().includes(searchText);
    });
   }

}
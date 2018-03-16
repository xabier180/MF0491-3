export class Producto{

    foto: string;
    precio: number;
    precio_litro: string;
    descripcion: string;
    oferta: boolean;
    

constructor( foto : string, precio:number, precio_litro:string, descripcion:string, oferta:boolean ){
    this.foto = foto;
    this.precio = precio;
    this.precio_litro= precio_litro;
    this.descripcion= descripcion;

  }

}

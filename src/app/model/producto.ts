export class Producto{

    foto: string;
    precio: number;
    precio_litro: string;
    descripcion: string;
    oferta: boolean;
    numero_productos: number
    

constructor( descripcion:string, foto : string, precio:number, precio_litro:string, oferta:boolean, numero_productos=1 ){
    this.descripcion= descripcion;
    this.foto = foto;
    this.precio = precio;
    this.precio_litro= precio_litro;
    this.numero_productos= 1;
    

  }

}

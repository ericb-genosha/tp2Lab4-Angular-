export class Factura {
    id: number;
    tipo: string;
    fecha: Date;
    numero: number;
    ptoVenta: number;
    clienteId: number;
    total: number;

    constructor(id:number, tipo:string, fecha:Date, numero:number, ptoVenta:number, clienteId:number,
        total:number){

            this.id = id;
            this.tipo = tipo;
            this.fecha=fecha;
            this.numero=numero;
            this.ptoVenta=ptoVenta;
            this.clienteId=clienteId;
            this.total=total;
    }
}

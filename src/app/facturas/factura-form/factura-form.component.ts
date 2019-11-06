import { Component, OnInit } from '@angular/core';
import { FacturaRepoService } from '../factura-repo.service';
import { Factura } from 'src/app/modelo/factura';

@Component({
  selector: 'app-factura-form',
  templateUrl: './factura-form.component.html',
  styleUrls: ['./factura-form.component.css']
})
export class FacturaFormComponent implements OnInit {

  factura:Factura = new Factura(0,'A',new Date("1111-11-11"),0,0,0,0);
  edicion:boolean = false;

  private _facturaService:FacturaRepoService

  constructor(private _facturaRepoService:FacturaRepoService) {
    this._facturaService.getAll();
  }
  ngOnInit() {
  }
  grabarItem(){
    
    this._facturaRepoService.agregar(this.factura)
    .subscribe(
      ()=>console.log("Se creó el cliente",Response)
    )
  
}
}

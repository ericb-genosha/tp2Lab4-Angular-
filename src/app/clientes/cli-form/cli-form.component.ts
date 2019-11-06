import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelo/cliente';
import { CliRepoService } from '../cli-repo.service';

@Component({
  selector: 'app-cli-form',
  templateUrl: './cli-form.component.html',
  styleUrls: ['./cli-form.component.css']
})
export class CliFormComponent implements OnInit {

  listadoCli:string[] = []
  cliente:Cliente = new Cliente(0,"","","");
  edicion:boolean=false;
  constructor(private _cliRepoService:CliRepoService) { }

  ngOnInit() { 
  }

  grabarCliente(){
    if(this.edicion){
      this._cliRepoService.actualizar(this.cliente)
      .subscribe(
        (Response)=>console.log("Se modificó el producto", Response)
      )
    }else
    {
      this._cliRepoService.agregar(this.cliente)
      .subscribe(
        ()=>console.log("Se creó el producto",Response)
      )
    }
  }

  editarCliente(cliId:number){
    this._cliRepoService.getById(cliId)
    .subscribe(
      (cliente) => {this.cliente = cliente;
        this.edicion = true;
      }
    )
  }

}

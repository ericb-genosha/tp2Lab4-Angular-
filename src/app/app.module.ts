import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProdListaComponent } from './productos/prod-lista/prod-lista.component';
import { ProdFormComponent } from './productos/prod-form/prod-form.component';
// import { CliListaComponent } from './clientes/cli-lista/cli-lista.component';
// import { CliFormComponent } from './clientes/cli-form/cli-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ItmFormComponent } from './items/itm-form/itm-form.component';
import { ItmListComponent } from './items/itm-list/itm-list.component';
import {RouterModule} from '@angular/router';
import { CliFormComponent } from './clientes/cli-form/cli-form.component';
import { CliListComponent } from './clientes/cli-list/cli-list.component';
import { FacturaFormComponent } from './facturas/factura-form/factura-form.component';
import { MenuFormComponent } from './menu/menu-form/menu-form.component';


const rutas = [
  {path:'items', component:ItmListComponent },
  {path:'items/nuevo',component:ItmFormComponent},
  {path:'items/:itemid',component:ItmFormComponent},

   {path:'clientes',component:CliListComponent},
   {path:'clientes/nuevo',component:CliFormComponent},
   {path:'clientes/:clienteid',component:CliFormComponent},

  {path:'productos',component:ProdListaComponent},
  {path:'productos/nuevo',component:ProdFormComponent},
  {path:'productos/:productoid',component:ProdFormComponent},

  {path:'facturas',component:FacturaFormComponent},

  {path:'menu',component:MenuFormComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    ProdListaComponent,
    ProdFormComponent,
    ItmFormComponent,
    ItmListComponent,
    CliListComponent,
    CliFormComponent,
    FacturaFormComponent,
    MenuFormComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(rutas)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

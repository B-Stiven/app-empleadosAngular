import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadosServiceServiceService } from './empleados-service-service.service';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';

import { SubListasComponent } from './sub-listas/sub-listas.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';
import { NotfoundComponent } from './notfound/notfound.component';

const appRoutes:Routes=[

  {path:'', component:HomeComponentComponent},
  {path:'proyectos', component:ProyectosComponentComponent},
  {path:'quienes', component:QuienesComponentComponent},
  {path:'contacto', component: ContactoComponentComponent},
  {path:'actualizar/:id', component: ActualizaComponentComponent},
  {path:'**', component: NotfoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListaEmpleadosComponent,
    SubListasComponent,
    HomeComponentComponent,
    ProyectosComponentComponent,
    QuienesComponentComponent,
    ContactoComponentComponent,
    ActualizaComponentComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServicioEmpleadosService, EmpleadosServiceServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { Alumno } from 'src/app/modelos/alumno';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {
  titulo: string ="Encabezado de pagina";

  alumno: Alumno = new Alumno("Jose",1,"tecnicatura");

  enlace: string ="https://angular.oi/";

  operacionCarga: string="Ingresando nuevo alumno";
  nuevo: boolean=false;
  operacionEdicion: string="Editando datos del alumno";

  listaAlumnos: string[]=["Matias","Maria","Jose","Pedro","Elena"];

  estado: number=1;

  profesor : string="mauro";
  



}

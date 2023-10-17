export class Alumno {
    id: number;
    nombre: string;
    carrera:string;

    constructor(alumno:string,id:number,carrera:string ) {

       this.nombre=alumno;
       this.id=id;
       this.carrera=carrera;
    }
}

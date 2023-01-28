import { Injectable } from '@angular/core';
import { Usuarios } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  ELEMENT_DATA: Usuarios[] = [
    {usuario : 1,  nombre: 'Matias',    apellido: "Villafañe", sexo: 'M'},
    {usuario : 2,  nombre: 'Lucio',    apellido: "Conde", sexo: 'M'},
    {usuario : 3,  nombre: 'Guadalupe',   apellido: "Benavidez",  sexo: 'F'},
    {usuario : 4,  nombre: 'Elizabeth', apellido: "Gordillo", sexo: 'F'},
    {usuario : 5,  nombre: 'Arnold',     apellido: "Cobloc", sexo: 'M'},
    {usuario : 6,  nombre: 'Yonatan',    apellido: "Bonin",sexo: 'M'},
    {usuario : 7,  nombre: 'Alberto',  apellido: "Soldani",sexo: 'M'},
    {usuario : 8,  nombre: 'Juan',    apellido: "Soto",sexo: 'M'},
    {usuario : 9,  nombre: 'Pilar',  apellido: "Muñoz",sexo: 'F'},
    {usuario : 10, nombre: 'Milagros',      apellido: "Rochi",sexo: 'F'},
  ];


  constructor() { }


  getUsuarios(){
    return this.ELEMENT_DATA.slice();
  }

  eliminarUsuario(id : number){

    let index;

    this.ELEMENT_DATA.forEach( el => { 
      if(el.usuario === id){
        index = this.ELEMENT_DATA.indexOf(el);
        this.ELEMENT_DATA.splice(index, 1);
      }
    })
   
  }

}

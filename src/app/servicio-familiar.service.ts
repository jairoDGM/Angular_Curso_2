import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioFamiliarService {

  hermanoGrande?: string;
  hermanoPequeño?: string;

  getHermanoGrande(): string{
    return this.hermanoGrande || ''; //retorna el valor de la variable o vacio, el "o" es el "||"
  }

  setHermanoGrande(hermano:string){
    this.hermanoGrande = hermano;
  }

  getHermanoPequeño(): string{
    return this.hermanoPequeño || '';
  }

  serHermanoPequeño(hermano:string){
    this.hermanoPequeño = hermano;
  }

  saludar(hermano: string){
    console.log(`hola ${hermano} `);
  }

  preguntarPorHijo():string{
    return '¿Como esta tu hijo?';
  }

  constructor() { }
}

import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit{

  constructor(
    private _servicioFamiliar : ServicioFamiliarService
  ){}


  hermanoGrande?: string;
  ngOnInit(): void {
      this._servicioFamiliar.setHermanoGrande("Jairo"); //seteamos valor en una variable del servicio
      this.hermanoGrande = this._servicioFamiliar.getHermanoGrande(); //obtenemos valor de una variable del servicio
  }

  saludar(){
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoGrande() || '');
  }

  preguntar(){
    console.log(this._servicioFamiliar.preguntarPorHijo());
  }

  reciboMensaje: string = "";

  recibirMensaje($event: string){
    this.reciboMensaje=$event;
  }

  agregarMensaje(){
    this.reciboMensaje = "jeje";
  }

  quitarMensaje(){
    this.reciboMensaje="";
  }


  valorContador: number = 0;
  mensajePadre = "Mensaje desde el padre 1";

  incrementar(){
    this.valorContador++;
  }

  decrementar(){
    this.valorContador--;
  }

}

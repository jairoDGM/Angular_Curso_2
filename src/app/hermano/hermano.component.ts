import { Component, OnInit, inject } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-hermano',
  templateUrl: './hermano.component.html',
  styleUrls: ['./hermano.component.css']
})
export class HermanoComponent implements OnInit{

  constructor(
    private _servicioFamiliar : ServicioFamiliarService
  ){}

  private _servicioFamiliar2 = inject(ServicioFamiliarService);

  hermanoPequeno?: string;
  ngOnInit(): void {
      this._servicioFamiliar.serHermanoPequeño("Eli");
      this.hermanoPequeno = this._servicioFamiliar.getHermanoPequeño();

  }

  saludar(){
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoPequeño() || '');
  }

  preguntar(){
    console.log(this._servicioFamiliar.preguntarPorHijo());
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  @Input() recibeHijo: string = "";

  @Output() mensajeDesdeHijo = new EventEmitter<string>();

  @Output() agregarMensajeHijo = new EventEmitter<void>();
  @Output() quitarMensajeHijo = new EventEmitter<void>();


  mensaje: string = "";

  enviarMensaje(){
    this.mensajeDesdeHijo.emit(this.mensaje);
  }

  agregarMensaje(){
    this.agregarMensajeHijo.emit();
  }

  quitarMensaje(){
    this.quitarMensajeHijo.emit();
  }



}

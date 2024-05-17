import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //forma en la que llamamos el componente
  templateUrl: './app.component.html', //rita del html
  styleUrls: ['./app.component.css'] //ruta del estilo, puede tener varios
})
export class AppComponent {
  title = 'HOLA MUNDO EN ANGULAR';
  subtitle = "segundo mensaje interpolado"
}

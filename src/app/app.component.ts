import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Capacitacion Angular';
  numero = "1";
  mostrar = true;
  frase: any = {
    mensaje: '¡El Doc esta vivo!',
    autor: 'Marty'
  }

  personajes: string[] = ['Marty', 'Doc', 'Biff'];
}

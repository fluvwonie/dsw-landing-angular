import { Component } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  imports: [],
  templateUrl: './home-screen.html',
  styleUrl: './home-screen.scss'
})
export class HomeScreen {
  tecnologias = [
    { nombre: 'HTML5', descripcion: 'Estructura del contenido de las páginas web.', icono: 'bi-filetype-html' },
    { nombre: 'CSS3', descripcion: 'Estilos y diseño responsivo de la interfaz.', icono: 'bi-filetype-css' },
    { nombre: 'JavaScript', descripcion: 'Interactividad y lógica en el navegador.', icono: 'bi-filetype-js' }
  ];
}
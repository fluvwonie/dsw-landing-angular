import { Component } from '@angular/core';

@Component({
  selector: 'app-documentacion-screen',
  imports: [],
  templateUrl: './documentacion-screen.html',
  styleUrl: './documentacion-screen.scss',
})
export class DocumentacionScreen {
  slides = [
    { nombre: 'Node.js', imagen: 'assets/img/node.png' },
    { nombre: 'TypeScript', imagen: 'assets/img/typescript.png' },
    { nombre: 'Angular', imagen: 'assets/img/angular.png' },
    { nombre: 'NPM', imagen: 'assets/img/npm.png' }
  ];
}

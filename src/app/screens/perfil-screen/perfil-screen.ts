import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-screen',
  imports: [],
  templateUrl: './perfil-screen.html',
  styleUrl: './perfil-screen.scss',
})
export class PerfilScreen {
  perfil = {
    nombre: 'Juan Estrada',
    email: 'juanestra@ejemplo.com',
    telefono: '222 123 4567',
    direccion: 'Calle Principal 123, Puebla, México',
    fechaNacimiento: '01/01/2000'
  };

}

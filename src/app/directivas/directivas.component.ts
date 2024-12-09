import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  standalone: true,
  imports: [],
  templateUrl: './directivas.component.html',
  styleUrl: './directivas.component.css'
})

export class DirectivasComponent {
  //está logeado o no el usuario 
  usuarioLogueado=true
  //Listado de empleados id, nombre, sueldo, estado 
  usuarios=[
    {
      id:1, 
      nombre: "Jose", 
      sueldo: 8600,
      activo: true  
    },
    {
      id:2, 
      nombre: "Sebastian", 
      sueldo: 8600,
      activo: true
    },
    {
      id:3, 
      nombre: "Ramon", 
      sueldo: 8600,
      activo: false
    },
    {
      id:4, 
      nombre: "Luis", 
      sueldo: 8600,
      activo: true
    },
    {
      id:5, 
      nombre: "Marcos", 
      sueldo: 8600,
      activo: false
    },
    {
      id:6, 
      nombre: "Hector", 
      sueldo: 8600,
      activo: true
    },
    {
      id:7, 
      nombre: "Andres", 
      sueldo: 8600,
      activo: true
    },
    {
      id:8, 
      nombre: "Mayra", 
      sueldo: 8600,
      activo: false
    },
    {
      id:9, 
      nombre: "Raquel", 
      sueldo: 8600,
      activo: true
    },
    {
      id:10, 
      nombre: "Jazmin", 
      sueldo: 8600,
      activo: true
    }
  ]

}

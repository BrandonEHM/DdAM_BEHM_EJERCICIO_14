import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DirectivasComponent } from "./directivas/directivas.component";
import { EncabezadoComponent } from "./encabezado/encabezado.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DirectivasComponent, EncabezadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cbdf-behm-ejercicio-14 -@if y @for';
}

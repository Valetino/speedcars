import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Categoria } from '../../interfaces/categorias';

@Component({
  selector: 'app-tarjeta-categorias',
  templateUrl: './tarjeta-categorias.component.html',
  styleUrls: ['./tarjeta-categorias.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class TarjetaCategoriasComponent {

  @Input({required:true}) categoria!:Categoria;

}

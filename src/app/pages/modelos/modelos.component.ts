import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { TarjetaProductoComponent } from 'src/app/core/components/tarjeta-producto/tarjeta-producto.component';
import { Producto } from 'src/app/core/interfaces/productos';
import { CategoriasService } from 'src/app/core/services/categorias.service';
import { HeaderService } from 'src/app/core/services/header.service';
import { ProductosService } from 'src/app/core/services/productos.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.scss'],
  standalone: true,
  imports: [TarjetaProductoComponent, CommonModule,RouterLink , HeaderComponent]
})

export class ModelosComponent{

  headerService = inject(HeaderService);
  productosService = inject(ProductosService);
  categoriasService = inject(CategoriasService);
  ac = inject(ActivatedRoute);
  productos:Producto[] = [];

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
  
  ngOnInit(): void {
    this.ac.params.subscribe(params => {
      if(params['id']){
       this.categoriasService.getById(parseInt(params['id']))
       .then(categoria =>{
          if(categoria) {
            this.productos = categoria.productos;
            this.headerService.titulo.set(categoria.nombre);
          }})
      }
    })
  }
}


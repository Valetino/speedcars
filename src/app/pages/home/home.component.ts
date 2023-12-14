import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { TabsComponent } from 'src/app/core/components/tabs/tabs.component';
import { TarjetaCategoriasComponent } from 'src/app/core/components/tarjeta-categorias/tarjeta-categorias.component';
import { Categoria } from 'src/app/core/interfaces/categorias';
import { CategoriasService } from 'src/app/core/services/categorias.service';
import { HeaderService } from 'src/app/core/services/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [TarjetaCategoriasComponent, CommonModule, RouterModule,HeaderComponent,TabsComponent],
})

export class HomeComponent implements OnInit, OnDestroy {

  headerService = inject(HeaderService);
  categoriasService = inject(CategoriasService);
  categorias:Categoria[] = [];


  ngOnInit(): void {
   this.headerService.titulo.set("");
   this.headerService.extendido.set(true);
   this.categoriasService.getAll().then(res => this.categorias = res)
  }

  ngOnDestroy(): void {
    this.headerService.extendido.set(false);
  }
  
  enviarMensaje(){
    const mensaje ="Hola! Estoy interesad@ en obtener mas informacion acerca de  "
    
    const link = "https://wa.me/+5493482607904"
    window.open(link,"blank");
    console.log (mensaje);
    
  }
}

import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderService } from 'src/app/core/services/header.service';
import { HeaderComponent } from "../../core/components/header/header.component";

@Component({
    selector: 'app-promociones',
    templateUrl: './promociones.component.html',
    styleUrls: ['./promociones.component.scss'],
    standalone: true,
    imports: [RouterLink, HeaderComponent]
})
export class PromocionesComponent implements OnInit{

  headerService = inject(HeaderService);
  
  ngOnInit(): void {
   this.headerService.titulo.set("promociones");
  }


}

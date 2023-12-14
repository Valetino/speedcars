import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderService } from 'src/app/core/services/header.service';
import { HeaderComponent } from "../../core/components/header/header.component";

@Component({
    selector: 'app-noticias',
    templateUrl: './noticias.component.html',
    styleUrls: ['./noticias.component.scss'],
    standalone: true,
    imports: [RouterLink, HeaderComponent]
})
export class NoticiasComponent implements OnInit {

   headerService = inject(HeaderService);
  
    ngOnInit(): void {
     this.headerService.titulo.set("");
    }

}

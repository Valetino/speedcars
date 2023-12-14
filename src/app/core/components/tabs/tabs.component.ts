import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';



@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  standalone: true,
  imports: [RouterLink]
})
export class TabsComponent {

  constructor(private router:Router){

  }

  navegar(direccion:string){
    //cambiar de pagina
    console.log(direccion)
    this.router.navigate([direccion])
  }

}

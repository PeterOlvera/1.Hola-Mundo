import { Component } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {
  mostrar:boolean=false;

  frase:any = {
    mensaje: "Un gran poder conlleva una gran responsabilidad",
    autor: "Ben Parker"
  }

  personajes:string[] = ["Spiderman", "Capitan america", "Hulk"];

}

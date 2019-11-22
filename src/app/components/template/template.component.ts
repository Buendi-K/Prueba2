import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-template",
  templateUrl: "./template.component.html",
  styles: [
    `
      .ng-invalid.ng-touched:not(form) {
        border: 1px solid red;
      }
    `
  ]
})
export class TemplateComponent {
  usuario: object = {
    nombre: null,
    apellidos: null,
    email: null,
    pais: "",
    sexo: "Hombre",
    acepta: false
  };

  paises = [
    { codigo: "ESP", nombrePais: "España" },
    { codigo: "USA", nombrePais: "Estados Unidos" },
    { codigo: "PRT", nombrePais: "Portugal" }
  ];

  sexos: string[] = ["Hombre", "Mujer", "Caracol"];

  constructor() {}

  guardar(forma: NgForm) {
    console.log("Formulario enviado");
    console.log("NgForm", forma);
    console.log("Valor usuario:", forma.value);
  }
}

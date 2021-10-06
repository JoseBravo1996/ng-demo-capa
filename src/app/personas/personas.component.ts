import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

class Persona {
  nombre: string;
  email: string;
  edad: number;
}

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent implements OnInit {

  formPersonas: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();

    console.log(this.formPersonas.value);
  }

  get f(){
    return this.formPersonas.controls;
  }

  initForm() {
    this.formPersonas = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(10)]],
      email:['', [Validators.required, Validators.email]],
      edad: ['19', [Validators.required, Validators.max(90), Validators.min(18)]]
    });
  }

  limpiarFormulario(){
    this.formPersonas.reset();
  }

  guardarFormulario(){
    var persona = new Persona();

    persona.nombre = this.formPersonas.get('nombre').value;
    persona.email = this.formPersonas.get('email').value;
    persona.edad = this.formPersonas.get('edad').value;

    console.log(persona);


  }

}

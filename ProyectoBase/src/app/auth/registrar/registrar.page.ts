import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  registraForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.registraForm = this.formBuilder.group({
        nombre: ['', Validators.required],
        correo: ['', [Validators.required , Validators.email]],
        contrasena: ['', [Validators.required, Validators.minLength(6)]],
        confirmacionContrasena: ['', Validators.required]

    });
  }

  ngOnInit() {}

  get f() { return this.registraForm.controls;}

  registrar() {
    console.log(this.registraForm.valid);
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncriptadoComponent } from './encriptado/encriptado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [EncriptadoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    EncriptadoComponent
  ]
})
export class EncriptadoModule { }

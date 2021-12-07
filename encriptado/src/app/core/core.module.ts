import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';
import { MainComponent } from './shell/main/main.component';
import { FooterComponent } from './shell/footer/footer.component';
import { EncriptadoModule } from '../encriptado/encriptado.module';



@NgModule({
  declarations: [ShellComponent, HeaderComponent, MainComponent, FooterComponent],
  imports: [
    CommonModule,
    EncriptadoModule
  ],
  exports: [
    ShellComponent
  ]
})
export class CoreModule { }

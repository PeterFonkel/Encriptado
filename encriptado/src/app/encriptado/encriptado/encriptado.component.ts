
import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-encriptado',
  templateUrl: './encriptado.component.html',
  styles: []
})

export class EncriptadoComponent implements OnInit {
  enctexto: string;
  destexto: string;
  encPass: string;
  desPass: string;
  textoEncriptado: string;
  textoDesencriptado: string;

  constructor() {
   
  }

  ngOnInit() {
    this.convertirTexto;
  }

  convertirTexto(conversion:string){
    if(conversion === 'encriptar'){
      this.textoEncriptado = CryptoJS.AES.encrypt(this.enctexto.trim(), this.encPass.trim()).toString();
    }else{
      this.textoDesencriptado = CryptoJS.AES.decrypt(this.destexto.trim(), this.desPass.trim()).toString(CryptoJS.enc.Utf8);
    }
  }
}

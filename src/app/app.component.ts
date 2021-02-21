import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
//no vea la palabra por aqui, no sea perra tramposa
  palabra = 'CENTRIFUGADO';
  palabraOculta = '';

  intentos = 0;

  gano = false;
  perdio = false;

  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
            'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor() {
    this.palabraOculta = '_ '.repeat( this.palabra.length );
  }

  comprobar(letra: string) {

    this.existeLetra(letra);

    const letraOcultaArr = this.palabraOculta.split(' ');

    for( let i = 0; i < this.palabra.length; i++) {
      if ( this.palabra[i] === letra ) {
        letraOcultaArr[i] = letra;
      }

    }

    this.palabraOculta = letraOcultaArr.join(' ');
    this.verificaGane();

  }

  verificaGane() {

    const  palabraArr = this.palabraOculta.split(' ');
    const palabraEvaluar = palabraArr.join('');

    if (palabraEvaluar === this.palabra) {
      this.gano = true;
      console.log('usuario GANO');
    }

    if (this.intentos >= 9) {
      this.perdio = true;
      console.log('el usuario perdio');
    }

  }

  existeLetra( letra: string) {

    if ( this.palabra.indexOf( letra ) >= 0 ) {

    } else {
      this.intentos ++;
    }

  }

}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculadoraService } from './service/apiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'test-rms-front';
  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;
  operacion: string = '+';

  constructor(private calculadoraService: CalculadoraService) {}

  Operar() {
    switch (this.operacion) {
      case '+':
        this.calculadoraService.realizarOperacion(
          this.operacion,
          this.num1,
          this.num2
        );
        break;
      case '-':
        this.resultado = this.num1 - this.num2;
        break;
      case '*':
        this.resultado = this.num1 * this.num2;
        break;
      case '/':
        this.resultado = this.num1 / this.num2;
        break;
    }

    // Realizar la operación POST con los datos
    this.calculadoraService.realizarOperacion(
      this.operacion,
      this.num1,
      this.num2
    );
  }
}

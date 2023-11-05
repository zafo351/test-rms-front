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
    if(this.operacion!==''){
      this.calculadoraService.realizarOperacion(
        this.operacion,
        this.num1,
        this.num2
      ).subscribe(result =>this.resultado=Number(result));
    }else{
      console.log('error i cannot make this operation')
    }
    

    
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CalculadoraService {
  private apiUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) {}

  realizarOperacion(operacion: string, num1: number, num2: number) {
    const data = JSON.stringify({
      number1: num1,
      number2: num2,
      operacion: operacion,
    });
    if ((operacion = '+')) {
      const sumRes = this.http.post(this.apiUrl + '/sum', data);
      return sumRes;
    }
    if ((operacion = '-')) {
      this.http.post(this.apiUrl + '/rest', data);
    }
    if ((operacion = '*')) {
      this.http.post(this.apiUrl + '/mult', data);
    }
    if ((operacion = '/')) {
      this.http.post(this.apiUrl + '/divi', data);
    }

    return data;
  }
}

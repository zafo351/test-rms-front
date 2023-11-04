import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CalculadoraService {
  private apiUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) {}

  realizarOperacion(operacion: string, num1: number, num2: number): Observable<String>  {
    console.log(operacion)
   let result= new Observable<String>()
    const data = JSON.stringify({
      number1: num1,
      number2: num2,
      operacion: operacion,
    });
    if (operacion == '+') {
     result= this.http.post<String>(this.apiUrl + '/sum', data);
    }
    if (operacion == '-') {
      result= this.http.post<String>(this.apiUrl + '/rest', data);
    }
    if (operacion == '*') {
      result=this.http.post<String>(this.apiUrl + '/mult', data);
    }
    if (operacion == '/'){
      result= this.http.post<String>(this.apiUrl + '/divi', data);
    }

    return result
  }
}

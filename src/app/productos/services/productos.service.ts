import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  endpoint: string = 'producto';

  constructor(private http: HttpClient) { }

  public crearProducto(productoRequest: Producto): Observable<any> {
    let url = environment.apiProductos + this.endpoint;
    return this.http.post(url, productoRequest);
  }

  public obtenerProductos(): Observable<Array<Producto>> {
    let url = environment.apiProductos + this.endpoint;
    return this.http.get<Array<Producto>>(url);
  }
}

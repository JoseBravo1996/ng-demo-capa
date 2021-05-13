import { TipoMercaderiaResponse } from './../models/tipoMercaderia';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mercaderia } from '../models/mercaderia';
import { TipoMercaderia } from '../models/tipoMercaderia';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  postMercaderia(request: Mercaderia)
  {
    return this.http.post(environment.restaurant + 'mercaderia/', request);
  }

  readMercaderia(id: number): Observable<Mercaderia> {
    return this.http.get<any>(environment.restaurant + 'mercaderia/' + id);
  }

  readTipoMercaderia(): Observable<TipoMercaderiaResponse> {
    return this.http.get<TipoMercaderiaResponse>(environment.restaurant + 'mercaderia');
  }

}

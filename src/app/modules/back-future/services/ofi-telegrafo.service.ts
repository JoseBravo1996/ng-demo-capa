import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfiTelegrafoService {

  private telegrafista = new BehaviorSubject<string>('');
  public telegrafista$ = this.telegrafista.asObservable();

  constructor() { }

  send(message){
    this.telegrafista.next(message);
  }
}

import { Mercaderia } from './models/mercaderia';
import { RestaurantService } from './services/restaurant.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TipoMercaderiaResponse } from './models/tipoMercaderia';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  form: FormGroup;
  formSearch: FormGroup;
  public tipoMercaderiaResponse = new TipoMercaderiaResponse();
  public mercaderia: Mercaderia;

  constructor(private formBuilder: FormBuilder, private restaurantService: RestaurantService) {

    this.restaurantService.readTipoMercaderia().subscribe(resp => {
      this.tipoMercaderiaResponse = resp;
    });
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: new FormControl('', Validators.required),
      tipo: new FormControl('', Validators.required),
      precio: new FormControl('', Validators.required),
      ingredientes: new FormControl('', Validators.required),
      preparacion: new FormControl('', Validators.required)
    });

    this.formSearch = this.formBuilder.group({
      search: new FormControl('', Validators.required)
    });


    this.form.controls['tipo'].valueChanges.subscribe(
      resp => {
        this.form.controls['tipo'].setValue(resp);
    });

  }

  save() {
    var mercaderia = new Mercaderia();
    mercaderia.nombre = this.form.get('nombre').value;
    mercaderia.tipo = this.form.get('tipo').value;
    mercaderia.precio = this.form.get('precio').value;
    mercaderia.ingredientes = this.form.get('ingredientes').value;
    mercaderia.preparacion = this.form.get('preparacion').value;
    mercaderia.imagen = 'No tiene';
    this.restaurantService.postMercaderia(mercaderia);
  }

  searchMercaderias(event){
    this.restaurantService.readMercaderia(event).subscribe(
      resp =>
      {
          this.mercaderia = resp;
      },
      error => { console.log(error) } );
  }

}

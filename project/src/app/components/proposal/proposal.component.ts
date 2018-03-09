import { Component, OnInit } from '@angular/core';
import { Car } from '../../model/car';
import { TodoRestApiService } from '../../services/todo-rest-api.service';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.css']
})
export class ProposalComponent implements OnInit {

  constructor(private restApiService: TodoRestApiService) {
  }

  public manufacturer: string;
  public modell: string;
  public ps: string;
  public year: string;
  public consumption: string;
  public km_driven: string;
  public colour: string;
  public seats: string;
  public description: string;
  public category: string;
  public fuel_type: string;
  public state: string;
  public price: string;
  public defects: string;
  public number_of_doors: string;
  public registration_date: string;
  public transmission: string;
  public safety: string;
  public extras: string;
  public isTrader: string;


  get interior(): Array<String> {
    return [
      'Klimaanlage',
      'Bluetooth',
      'Elektr. Seitenspiegel',
      'Regensensor',
      'Sitzheizung',
      'Tempomat',
      'Bordcomputer',
      'Elektr. Sitzeinstellung',
      'MP3-Schnittstelle,'

    ];
  }


  public saveCar() {
    console.log(this.carArray);
    //this.setCarIntoTable(this.carArray);
  }

  get carArray(): Array<Object> {
    return [{
      manufacturer: this.manufacturer,
      modell: this.modell,
      ps: this.ps,
      year: this.year,
      consumption: this.consumption,
      km_driven: this.km_driven,
      colour: this.colour,
      seats: this.seats,
      description: this.description,
      category: this.category,
      fuel_type: this.fuel_type,
      state: this.state,
      price: this.price,
      defects: this.defects,
      number_of_doors: this.number_of_doors,
      registration_date: this.registration_date,
      transmission: this.transmission,
      interior: this.interior,
      safety: this.safety,
      extras: this.extras,
      isTrader: this.isTrader
    }];
  }

  public setCarIntoTable(carArray) {
    this.restApiService.setCar(carArray);
  }

  ngOnInit() {
  }

}

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
  public checked;

  public klimaanlage: boolean;
  public bluetooth: boolean;
  public seitenspiegel: boolean;
  public regensensor: boolean;
  public sitzheizung: boolean;
  public tempomat: boolean;
  public bordcomputer: boolean;
  public sitzeinstellung: boolean;
  public mp3: boolean;
  public schiebedach: boolean;
  public radio: boolean;
  public cd: boolean;
  public freisprecheinrichtung: boolean;
  public multifunktionslenkrad: boolean;
  public servolenkung: boolean;
  public standheizung: boolean;
  public zentralverriegelung: boolean;
  public fensterheber: boolean;
  public navigation: boolean;

  public saveCar() {
    console.log(this.getValuesInterior());

    //this.setCarIntoTable(this.carArray);
  }

  private getValuesInterior(): Array<String> {
    let data = [];
    if (this.klimaanlage === true) {
      data.push('Klimaanlage');
    }
    if (this.bluetooth === true) {
      data.push('Bluetooth');
    }
    if (this.seitenspiegel === true) {
      data.push('Elektr. Seitenspiegel');
    }
    if (this.regensensor === true) {
      data.push('Regensensor');
    }
    if (this.sitzheizung === true) {
      data.push('Sitzheizung');
    }
    if (this.tempomat === true) {
      data.push('Tempomat');
    }
    if (this.bordcomputer === true) {
      data.push('Bordcomputer');
    }
    if (this.sitzeinstellung === true) {
      data.push('Elektr. Sitzeinstellung');
    }
    if (this.mp3 === true) {
      data.push('MP3-Schnittstelle');
    }
    if (this.schiebedach === true) {
      data.push('Schiebedach');
    }
    if (this.radio === true) {
      data.push('Tuner/Radio');
    }
    if (this.cd === true) {
      data.push('CD-Spieler');
    }
    if (this.freisprecheinrichtung === true) {
      data.push('Freisprecheinrichtung');
    }
    if (this.multifunktionslenkrad === true) {
      data.push('Multifunktionslenkrad');
    }
    if (this.servolenkung === true) {
      data.push('Servolenkung');
    }
    if (this.standheizung === true) {
      data.push('Standheizung');
    }
    if (this.zentralverriegelung === true) {
      data.push('Zentralverriegelung');
    }
    if (this.fensterheber === true) {
      data.push('Elektr. Fensterheber');
    }
    if (this.navigation === true) {
      data.push('Navigationssyste');
    }
    return data;
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
      //interior: this.interiors,
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

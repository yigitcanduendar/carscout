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
  public km_driven: string;
  public colour: string;
  public seats: string;
  public description: string;
  public category: string;
  public fuel_type: string;
  public interiors: Array<String>;
  public price: string;
  public number_of_doors: string;
  public registration_date: string;
  public transmission: string;
  public safeties: Array<String>;
  public extras: Array<String>;
  public haendler: string;
  public privat: string;

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

  public abs: boolean;
  public esp: boolean;
  public nebelscheinwerfer: boolean;
  public abstandstempomat: boolean;
  public kurvenlicht: boolean;
  public allradantrieb: boolean;
  public led_scheinwerfer: boolean;
  public xenonscheinwerfer: boolean;
  public spurhalteassistent: boolean;
  public tagfahrlicht: boolean;

  public sportsitze: boolean;
  public sportfahrwerk: boolean;
  public anhaengerkupplung: boolean;
  public panorama_dach: boolean;

  /**
   * Speichert alle Werte mit dem CarArray in die Tabelle.
   */
  public saveCar() {
    this.interiors = this.getValuesInterior();
    this.safeties = this.getValuesSafeties();
    this.extras = this.getValuesExtras();
    if (this.privat === "Privat") {
      this.carArray.splice(this.carArray.indexOf(this.privat), 1);
    } else if (this.haendler === "Händler") {
      this.carArray.splice(this.carArray.indexOf(this.haendler), 1);
    }
    this.setCarIntoTable(this.carArray);
  }

  /**
   * Prüft, ob eine Checkbox für Extras ausgewählt wurde und füllt diese mit den entsprechenden Werten.
   */
  private getValuesExtras(): Array<String> {
    let data = [];
    if (this.sportsitze === true) {
      data.push('Sportsitze');
    }
    if (this.sportfahrwerk === true) {
      data.push('Sportfahrwerk');
    }
    if (this.anhaengerkupplung === true) {
      data.push('Anhängerkupplung');
    }
    if (this.panorama_dach === true) {
      data.push('Panorama-Dach');
    }
    return data;
  }

  /**
   * Prüft, ob eine Checkbox für Sicherheiten ausgewählt wurde und füllt diese mit den entsprechenden Werten.
   */
  private getValuesSafeties(): Array<String> {
    let data = [];
    if (this.abs === true) {
      data.push('ABS');
    }
    if (this.esp === true) {
      data.push('ESP');
    }
    if (this.nebelscheinwerfer === true) {
      data.push('Nebelscheinwerfer');
    }
    if (this.abstandstempomat === true) {
      data.push('Abstandstempomat');
    }
    if (this.kurvenlicht === true) {
      data.push('Kurvenlicht');
    }
    if (this.allradantrieb === true) {
      data.push('Allradantrieb');
    }
    if (this.led_scheinwerfer === true) {
      data.push('LED-Scheinwerfer');
    }
    if (this.xenonscheinwerfer === true) {
      data.push('Xenonscheinwerfer');
    }
    if (this.spurhalteassistent === true) {
      data.push('Spurhalteassistent');
    }
    if (this.tagfahrlicht === true) {
      data.push('Tagfahrlicht');
    }
    return data;
  }

  /**
   * Prüft, ob eine Checkbox für Inennausstattungsmerkmale ausgewählt wurde und füllt diese mit den entsprechenden Werten.
   */
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

  /**
   * Das Objekt, welches später in die Tabelle hinzugefügt wird.
   */
  get carArray(): Array<Object> {
    return [{
      manufacturer: this.manufacturer,
      modell: this.modell,
      ps: this.ps,
      year: this.year,
      km_driven: this.km_driven,
      colour: this.colour,
      seats: this.seats,
      description: this.description,
      category: this.category,
      fuel_type: this.fuel_type,
      price: this.price,
      number_of_doors: this.number_of_doors,
      registration_date: this.registration_date,
      transmission: this.transmission,
      interiors: this.interiors,
      safety: this.safeties,
      extras: this.extras,
      haendler: this.haendler,
      privat: this.privat
    }];
  }

  /**
   * Setzt mit dem CarArray die Daten in die Tabelle.
   * 
   * @param carArray
   */
  public setCarIntoTable(carArray) {
    this.restApiService.setCar(carArray);
  }

  ngOnInit() {
  }

}

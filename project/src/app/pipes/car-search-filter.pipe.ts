import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../../../../backend/src/model/Car';

@Pipe({
  name: 'carSearchFilter'
})
export class CarSearchFilterPipe implements PipeTransform {

  constructor() { }

  transform(items: Car[], searchString: string): Car[] {
    if (!items) {
      return [];
    }

    return items.filter(t =>
      t.modell === searchString
      || t.modell.toLowerCase().indexOf(searchString.toLowerCase()) > -1
    );
  }


}

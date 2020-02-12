import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyUnit'
})
export class CurrencyUnitPipe implements PipeTransform {

  transform(value: any, unit: string = '', toFixed: number = 0): any {
    let result: string = '';

    if (toFixed > 0) {
      result = value.toFixed(toFixed);
    }

    if (unit) { // not empty
      result = result + ` ${unit}`;
    }
    else {
      result = result + ' (undefined)';      
    }

    return result;
  }

}

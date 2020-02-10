import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyUnit'
})
export class CurrencyUnitPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}

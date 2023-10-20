import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat',
})
export class CurrencyFormatPipe implements PipeTransform {
  transform(value: string, currencyCode: string = 'BRL'): unknown {
    let formattedValue = Number(value).toLocaleString('pt-BR', {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 2,
    });
    return formattedValue;
  }
}

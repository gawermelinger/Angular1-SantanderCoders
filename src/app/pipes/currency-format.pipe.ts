import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat',
})
export class CurrencyFormatPipe implements PipeTransform {
  transform(value: number, currencyCode: string = 'BRL'): unknown {
    let formattedCurrency = value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 2,
    });
    return formattedCurrency;
  }
}

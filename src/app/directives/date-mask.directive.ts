import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDateMask]',
})
export class DateMaskDirective {
  /*@HostListener('input', ['$event'])
  onInput(event: Event) {
    //o 'as' muda a tipagem dele
    const input = event.target as HTMLInputElement;
    const value = input.value;

    const formattedValue = value.replace(/\D/g, '');

    debugger;
    if (formattedValue.length >= 3 && formattedValue.length < 5) {
      input.value = `${formattedValue.slice(0, 2)}/${formattedValue.slice(2)}`;
      return;
    }
    if (formattedValue.length >= 5) {
      input.value = `${formattedValue.slice(0, 2)}/${formattedValue.slice(
        2,
        4
      )}/${formattedValue.slice(4, 8)}`;
      return;
    }
    input.value = formattedValue;
  }

  constructor() {}*/
}

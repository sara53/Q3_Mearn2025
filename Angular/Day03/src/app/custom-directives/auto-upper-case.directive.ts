import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAutoUpperCase]',
})
export class AutoUpperCaseDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input') onInputChange() {
    this.el.nativeElement.value = this.el.nativeElement.value.toUpperCase();
  }
}

import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScaleElement]',
})
export class ScaleElementDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.transform = 'scale(1.1)';
    this.el.nativeElement.style.transition = 'all 0.5s ease-in-out';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.transition = 'all 0.5s ease-in-out';
    this.el.nativeElement.style.transform = 'scale(1)';
  }
}

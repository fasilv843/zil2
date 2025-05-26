import { Directive, ElementRef, inject, input, OnChanges, Renderer2 } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appError]',
})
export class ErrorDirective implements OnChanges {
  errors = input.required<ValidationErrors | null>()
  control = input.required<AbstractControl>()

  el = inject(ElementRef)
  renderer = inject(Renderer2)

  ngOnChanges(): void {
    if (this.errors() && (this.control().touched || this.control().dirty)) {
      this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid red');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid black')
    }
  }
}

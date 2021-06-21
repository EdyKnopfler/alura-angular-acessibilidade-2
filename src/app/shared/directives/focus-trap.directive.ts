import { AfterViewInit, Directive, ElementRef, HostListener } from "@angular/core";

// REGRAS:
// Quando o modal se abre, o primeiro elemento focável deve ganhar o foco
// O foco deve ficar preso no modal

@Directive({
  selector: '[appFocusTrap]'
})
export class FocusTrapDirective implements AfterViewInit {

  private firstFocusableElement!: HTMLElement;
  private lastFocusableElement!: HTMLElement;

  constructor(private elementRef: ElementRef<any>) {}

  ngAfterViewInit(): void {
    const focusableElements = this.elementRef
      .nativeElement
      .querySelectorAll(`
        [tabindex]:not([tabindex="-1"]),
        a[href]:not([disabled]),
        button:not([disabled]),
        textarea:not([disabled]),
        input:not([disabled]),
        select:not([disabled])`
      ) as Array<HTMLElement>;

    this.firstFocusableElement = focusableElements[0];
    this.lastFocusableElement = focusableElements[focusableElements.length - 1];
    this.firstFocusableElement.focus();
  }

  @HostListener('keydown', ['$event'])
  manageTab(event: KeyboardEvent) {
    if (event.key !== 'Tab') {
      return;
    }

    if (event.shiftKey && document.activeElement == this.firstFocusableElement) {
      this.lastFocusableElement.focus();
      event.preventDefault();
    }
    else if (!event.shiftKey && document.activeElement == this.lastFocusableElement) {
      this.firstFocusableElement.focus();
      event.preventDefault();
    }
  }

}

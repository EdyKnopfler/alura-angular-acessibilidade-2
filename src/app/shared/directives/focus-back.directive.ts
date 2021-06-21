
import { Directive, OnDestroy, OnInit } from "@angular/core";

// REGRA: devolver o foco ao componente anterior ao fechar o modal

@Directive({
  selector: '[appFocusBack]'
})
export class FocusBackDirective implements OnInit, OnDestroy {
  private lastFocusedElement!: HTMLElement;

  // Após o componente receber as inbound properties (@Input), porém antes de ser exibido
  ngOnInit(): void {
    this.lastFocusedElement = document.activeElement as HTMLElement;
  }

  ngOnDestroy(): void {
    if (this.lastFocusedElement) {
      this.lastFocusedElement.focus();
    }
  }

}



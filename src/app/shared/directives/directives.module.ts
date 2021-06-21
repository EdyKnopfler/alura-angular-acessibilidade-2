import { FocusBackDirective } from './focus-back.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FocusTrapDirective } from "./focus-trap.directive";

@NgModule({
  declarations: [FocusTrapDirective, FocusBackDirective],
  imports: [CommonModule],
  exports: [FocusTrapDirective, FocusBackDirective]
})
export class DirectivesModule {

}

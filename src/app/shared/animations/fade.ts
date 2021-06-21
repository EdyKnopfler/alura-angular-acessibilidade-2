import { trigger, transition, style, animate } from '@angular/animations';

export const fade = trigger(
  'fade',  // Nome do gatilho: usado para disparar as animações
  [
    // Lista de transições
    transition(
      ':enter',  // Quando o elemento entra no DOM
      [
        style({ opacity: 0 }),
        animate(200, style({ opacity: 1 }))
      ]
    ),
    transition(
      ':leave',  // Quando o elemento sai do DOM
      [
        animate(200, style({ opacity: 0 }))
      ]
    ),
  ]
);

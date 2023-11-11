import {animate, state, style, transition, trigger} from "@angular/animations";

export const fadeInOut = trigger('fadeInOut', [
  state('in', style({
    opacity: 1,
  })),
  state('void', style({
    opacity: 0,
  })),
  state('out', style({
    opacity: 0,
  })),
  transition('in <=> out', animate('200ms ease-in-out')),
  transition('void <=> in', animate('200ms ease-in-out'))
]);

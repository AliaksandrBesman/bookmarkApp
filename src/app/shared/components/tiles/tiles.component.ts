import {Component, Input} from '@angular/core';
import {fadeInOut} from "../../../core/animations/animations";

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.scss'],
  animations: [fadeInOut]
})
export class TilesComponent {
  @Input() tiles = [
    {
      state: 'in',
      src: 'https://images.unsplash.com/photo-1464820453369-31d2c0b651af?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      active: false
    },
    {
      state: 'in',
      src: 'https://images.unsplash.com/photo-1498940757830-82f7813bf178?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      active: false
    },
    {
      state: 'in',
      src: 'https://images.unsplash.com/photo-1538291323976-37dcaafccb12?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      active: false
    },
    {
      state: 'in',
      src: 'https://images.unsplash.com/photo-1535882686-b1332af6f51e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      active: false
    },
    {
      state: 'in',
      src: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      active: false
    },
    {
      state: 'in',
      src: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      active: false
    }
  ];

  constructor() { }

  public setActiveIndex(index: number): void {
    this.tiles.forEach(tile => tile.state = 'out');

    setTimeout(() => {
      this.tiles.forEach(tile => tile.state = 'in');
      if (this.tiles[index].active) {
        this.tiles.forEach(tile => {
          tile.active = false;
        });
        return;
      }
      this.tiles.forEach((tile) => {
        tile.active = false;
      });
      this.tiles[index].active = true;
    }, 200);

  }

  public isNotActiveImage(): boolean {
    return this.tiles.every(tile => !tile.active);
  }
}

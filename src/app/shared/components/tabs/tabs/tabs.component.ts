import { Component } from '@angular/core';
import {TabComponent} from "../tab/tab.component";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  public tabs: Array<TabComponent> = [];

  constructor() { }

  public addTab(tab: TabComponent): void {
    if (this.tabs.length === 0) {
      tab.active = true;
    }
    this.tabs.push(tab);
  }

  public selectTab(tab: TabComponent) {
    this.tabs.forEach((tab: TabComponent) => {
      tab.active = false;
    });
    tab.active = true;
  }
}

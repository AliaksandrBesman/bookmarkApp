import { Injectable } from '@angular/core';
import {SidebarLink} from "./sidebar-interfaces";

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  public sidebarLinks = sidebarLinks;

  constructor() { }

  public setActiveSidebarLink(link: SidebarLink): void {
    this.sidebarLinks.forEach((link: SidebarLink) => link.isActive = false);
    link.isActive = true;
  }

  public getActiveSidebarLink(): SidebarLink {
    return this.sidebarLinks.find((link: SidebarLink) => link.isActive)!;
  }
}

const sidebarLinks: Array<SidebarLink> = [
  {
    linkName: 'Design',
    linkPath: '/design',
    isActive: true
  },
  {
    linkName: 'Barbeque',
    linkPath: '/productivity',
    isActive: false
  },
  {
    linkName: 'Productivity',
    linkPath: '/productivity',
    isActive: false
  },
  {
    linkName: 'Workout',
    linkPath: '/productivity',
    isActive: false
  },
  {
    linkName: 'Book',
    linkPath: '/productivity',
    isActive: false
  },
  {
    linkName: 'Snack',
    linkPath: '/productivity',
    isActive: false
  }
] // TODO replace to config

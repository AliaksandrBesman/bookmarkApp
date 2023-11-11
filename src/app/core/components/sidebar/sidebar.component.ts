import { Component, OnInit } from '@angular/core';
import {SidebarLink} from "./sidebar-interfaces";
import {Router} from "@angular/router";
import {SidebarService} from "./sidebar.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public sidebarLinks: Array<SidebarLink> = this.sidebarService.sidebarLinks;

  constructor(
    private sidebarService: SidebarService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public openLink(link: SidebarLink): void {
    this.sidebarService.setActiveSidebarLink(link);
    this.router.navigate([link.linkPath]).then(() => link.isActive = true)
  }
}



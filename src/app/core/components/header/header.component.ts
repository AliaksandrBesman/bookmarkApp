import { Component, OnInit } from '@angular/core';
import {SidebarLink} from "../sidebar/sidebar-interfaces";
import {SidebarService} from "../sidebar/sidebar.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  get currentLink(): SidebarLink {
     return this.sidebarService.getActiveSidebarLink();
  }

  constructor(
    private sidebarService: SidebarService
  ) { }

  ngOnInit(): void {
  }

}

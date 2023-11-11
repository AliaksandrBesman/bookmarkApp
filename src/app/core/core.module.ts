import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {SharedModule} from "../shared/shared.module";
import {SidebarModule} from "./components/sidebar/sidebar.module";
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SidebarModule
  ],
  exports: [
    SidebarComponent,
    HeaderComponent
  ]
})
export class CoreModule { }

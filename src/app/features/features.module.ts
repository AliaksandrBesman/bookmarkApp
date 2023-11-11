import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DesignComponent} from "./pages/design/design.component";
import {SharedModule} from "../shared/shared.module";
import { ProductivityComponent } from './pages/productivity/productivity.component';
import {TabsModule} from "../shared/components/tabs/tabs.module";



@NgModule({
  declarations: [
    DesignComponent,
    ProductivityComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        TabsModule
    ],
  exports: [
    DesignComponent
  ]
})
export class FeaturesModule { }

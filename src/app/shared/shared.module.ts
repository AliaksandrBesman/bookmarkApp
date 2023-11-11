import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TilesComponent } from './components/tiles/tiles.component';



@NgModule({
    declarations: [
        TilesComponent
    ],
    exports: [
        TilesComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }

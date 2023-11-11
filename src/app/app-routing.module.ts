import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DesignComponent} from "./features/pages/design/design.component";
import {ProductivityComponent} from "./features/pages/productivity/productivity.component";

const routes: Routes = [
  {path: 'design', component: DesignComponent},
  {path: 'productivity', component: ProductivityComponent},
  {path: '', redirectTo: '/design', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

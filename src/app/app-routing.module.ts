import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HalllistComponent } from './halllist/halllist.component';

const routes: Routes = [
  {
    path:"hall/:id",
    component:HalllistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

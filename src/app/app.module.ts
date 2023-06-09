import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OwnerlistComponent } from './ownerlist/ownerlist.component';
import { HalllistComponent } from './halllist/halllist.component';

@NgModule({
  declarations: [
    AppComponent,
 
    OwnerlistComponent,
    HalllistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

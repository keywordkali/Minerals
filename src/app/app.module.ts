import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Mineral } from './mineral/mineral.class';
import { MineralListComponent } from './mineral/mineral-list/mineral-list.component';
import { MineralCreateComponent } from './mineral/mineral-create/mineral-create.component';
import { MineralEditComponent } from './mineral/mineral-edit/mineral-edit.component';
import { MineralDetailComponent } from './mineral/mineral-detail/mineral-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    Mineral,
    MineralListComponent,
    MineralCreateComponent,
    MineralEditComponent,
    MineralDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

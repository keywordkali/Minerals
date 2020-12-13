import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Mineral } from './mineral/mineral.class';
import { MineralListComponent } from './mineral/mineral-list/mineral-list.component';
import { MineralCreateComponent } from './mineral/mineral-create/mineral-create.component';
import { MineralEditComponent } from './mineral/mineral-edit/mineral-edit.component';
import { MineralDetailComponent } from './mineral/mineral-detail/mineral-detail.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './menu/home/home/home.component';
import { AboutComponent } from './menu/about/about.component';
import { HelpComponent } from './menu/help/help.component';




@NgModule({
  declarations: [
    AppComponent,
    Mineral,
    MineralListComponent,
    MineralCreateComponent,
    MineralEditComponent,
    MineralDetailComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    HelpComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

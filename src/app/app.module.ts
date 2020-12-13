import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MineralComponent } from './mineral/mineral/mineral.component';
import { MineralListComponent } from './mineral/mineral-list/mineral-list.component';
import { MineralCreateComponent } from './mineral/mineral-create/mineral-create.component';
import { MineralEditComponent } from './mineral/mineral-edit/mineral-edit.component';
import { MineralDetailComponent } from './mineral/mineral-detail/mineral-detail.component';
import { MineralSearchPipe } from './mineral/mineral-search.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './menu/home/home/home.component';
import { AboutComponent } from './menu/about/about.component';
import { HelpComponent } from './menu/help/help.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    MineralComponent,
    MineralListComponent,
    MineralCreateComponent,
    MineralEditComponent,
    MineralDetailComponent,
    MineralSearchPipe,
    SortPipe,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    HelpComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

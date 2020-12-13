import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MineralListComponent } from './mineral/mineral-list/mineral-list.component';
import { MineralEditComponent } from './mineral/mineral-edit/mineral-edit.component';
import { MineralDetailComponent } from './mineral/mineral-detail/mineral-detail.component';
import { MineralCreateComponent } from './mineral/mineral-create/mineral-create.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './menu/home/home/home.component';
import { AboutComponent } from './menu/about/about.component';
import { HelpComponent } from './menu/help/help.component';

const routes: Routes = [
  
    { path: '', redirectTo: '/minerals/list', pathMatch: 'full' },
    { path: 'minerals/list', component: MineralListComponent },
    { path: 'minerals/edit/:id', component: MineralEditComponent },
    { path: 'minerals/detail/:id', component: MineralDetailComponent },
    { path: 'minerals/create', component: MineralCreateComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'help', component: HelpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

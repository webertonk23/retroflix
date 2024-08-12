import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsolesComponent } from '../pages/consoles/consoles.component';
import { RomsComponent } from '../pages/roms/roms.component';

const routes: Routes = [
  { path: 'consoles', component: ConsolesComponent },
  { path: 'console/:id', component: RomsComponent },
  // {
  //   path: 'pessoas',
  //   loadChildren: () => import('../pages/people/people.module').then(m => m.PeopleModule),  
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class LayoutRoutingModule { }

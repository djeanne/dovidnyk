import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PageComponent } from './components/page/page.component';
import { AddEntryComponent } from './components/add-entry/add-entry.component';

const routes: Routes = [
  {path: '', component: PageComponent, pathMatch: 'full'},
  {path: 'add', component: AddEntryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

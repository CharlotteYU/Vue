import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopComponent } from './top/top.component';
import { CommonModule } from '@angular/common';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  { path: '', redirectTo:'top/1', pathMatch: 'full'},
  { path: 'top/:page', component: TopComponent},
  { path: 'new/:page', component: NewComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HerosComponent } from './heros/heros.component';
import { App1Component } from './app1/app1.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heros', component: HerosComponent },
  { path: 'app1', component: App1Component },
] 
@NgModule({
  imports: [
    RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }

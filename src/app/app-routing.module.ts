import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetDataComponent } from '../app/get-data/get-data.component'


const routes: Routes = [
  {
    path: 'getData',
    component: GetDataComponent
  }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

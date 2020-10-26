import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgendarComponent } from './agendar/agendar.component';

const routes: Routes = [
  {
    path: '',
    component: AgendarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendamentoRoutingModule { }

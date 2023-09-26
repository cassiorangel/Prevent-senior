import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'agendar',
    loadChildren: () => import('./agendamento/agendamento.module').then(m => m.AgendamentoModule)
  },
  {
    path: '',
    redirectTo: '/agendar',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

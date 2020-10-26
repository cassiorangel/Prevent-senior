import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendamentoRoutingModule } from './agendamento-routing.module';
import { AgendarComponent } from './agendar/agendar.component';


@NgModule({
  declarations: [AgendarComponent],
  imports: [
    CommonModule,
    AgendamentoRoutingModule
  ]
})
export class AgendamentoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { ReactiveFormsModule } from '@angular/forms';

import { AgendamentoRoutingModule } from './agendamento-routing.module';
import { AgendarComponent } from './agendar/agendar.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';



@NgModule({
  declarations: [AgendarComponent],
  imports: [
    CommonModule,
    MatSliderModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
    MatFormFieldModule,
    AgendamentoRoutingModule
  ],
  
})
export class AgendamentoModule { }

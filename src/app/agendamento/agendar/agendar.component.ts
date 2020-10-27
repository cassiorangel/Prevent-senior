import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.scss']
})
export class AgendarComponent implements OnInit {

  profileForm = this.fb.group({
    horario: [null],
    lastName: [null]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.profileForm.value)
  }

}

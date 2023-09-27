import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as XLSX from 'xlsx';

type AOA = any[][];


@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.scss']
})
export class AgendarComponent implements OnInit {

  data: any = [[1, 2], [3, 4]];
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName: string = 'SheetJS.xlsx';


  arrayBuffer: any;
  file: File;

  profileForm = this.fb.group({
    horario: [''],
    message: [''],
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  incomingfile(evt: any) {
  /* wire up file reader */
  const target: DataTransfer = <DataTransfer>(evt.target);
  if (target.files.length !== 1) throw new Error('Cannot use multiple files');
  const reader: FileReader = new FileReader();
  reader.onload = (e: any) => {
    /* read workbook */
    const bstr: string = e.target.result;
    const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

    /* grab first sheet */
    const wsname: string = wb.SheetNames[0];
    const ws: XLSX.WorkSheet = wb.Sheets[wsname];

    /* save data */
    this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
    console.log(this.data);
  };
  reader.readAsBinaryString(target.files[0]);
  }

  upload() {
    console.log(this.profileForm.value)
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as XLSX from 'ts-xlsx';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.scss']
})
export class AgendarComponent implements OnInit {

  arrayBuffer: any;
  file: File;

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

  incomingfile(event) {
    this.file = event.target.files[0];
  }

  upload() {

    let extArquivoTypo = this.file['name'].split('.').pop();

    let extPermitidas = ['xlsx'];

    if (typeof extPermitidas.find((ext) => { return extArquivoTypo == ext; }) == 'undefined') {
      alert('Extensão "' + extArquivoTypo + '" não permitida!');
    } else {
      let fileReader = new FileReader();
      fileReader.onload = (e) => {
        this.arrayBuffer = fileReader.result;
        var data = new Uint8Array(this.arrayBuffer);
        var arr = new Array();
        for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
        var bstr = arr.join("");
        var workbook = XLSX.read(bstr, { type: "binary" });
        var first_sheet_name = workbook.SheetNames[0];
        var worksheet = workbook.Sheets[first_sheet_name];
        console.log('w', XLSX.utils.sheet_to_json(worksheet, { raw: true }));
      }
      fileReader.readAsArrayBuffer(this.file);
    }
  }
}

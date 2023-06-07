import { Component } from '@angular/core';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-display-excel',
  templateUrl: './display-excel.component.html',
  styleUrls: ['./display-excel.component.css']
})

export class DisplayExcelComponent {
  jsonData:any;
  constructor(private dataService:DataTransferService){
    this.jsonData=this.dataService.getJsonData()
    this.dataService.getFileData()
  }
  
}

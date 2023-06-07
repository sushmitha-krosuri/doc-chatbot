import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataTransferService } from '../services/data-transfer.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isExcel:any
  constructor(private dataService:DataTransferService){
    this.isExcel=this.dataService.getFileData()

  }

}




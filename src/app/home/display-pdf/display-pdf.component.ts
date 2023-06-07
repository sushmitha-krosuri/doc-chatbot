import { Component } from '@angular/core';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-display-pdf',
  templateUrl: './display-pdf.component.html',
  styleUrls: ['./display-pdf.component.css']
})
export class DisplayPdfComponent {
  pdfSrc!: string;
constructor(private dataService:DataTransferService){
  this.pdfSrc=dataService.getsrc()
  console.log(this.pdfSrc)
}
 
}

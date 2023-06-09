import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DataTransferService } from 'src/app/services/data-transfer.service';


@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.css']
})
export class DialogComponentComponent {
  

isExcel:boolean;
ispdf:boolean;
// @Inject(MAT_DIALOG_DATA)
// public data: any,
  // fileData:any;
  constructor(private dataService:DataTransferService, public dialogRef: MatDialogRef<DialogComponentComponent>) {
    // console.log('Received Data:', data);
    // this.fileData = data.content;
    this.isExcel=this.dataService.getFileData()
    this.ispdf=this.dataService.getisPdf()
    console.log(this.ispdf,"ispdf in dialog")


  }

  closeDialog() {
    this.dialogRef.close();
  }

 
  

   
 }

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataTransferService {
  choosenFile:any;
  jsonData:any
  ispdf:any;
  src:any
  constructor() { }

  sendsrc(src:any){
    this.src=src
  }
  getsrc(){
    return this.src
  }

  sendisPdf(ispdf:boolean){
    this.ispdf=ispdf
  }

  getisPdf(){
    return this.ispdf
  }

  sendJsonData(jsonData:any){
    this.jsonData=jsonData
  }

  sendFileData(file:any){
    this.choosenFile=file
  }

  getJsonData(){
    return this.jsonData
  }

  getFileData(){
    return this.choosenFile
  }

}

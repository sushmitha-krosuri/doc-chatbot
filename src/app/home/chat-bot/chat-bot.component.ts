import { ChangeDetectorRef, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import * as XLSX from 'xlsx';
// import * as FileSaver from 'file-saver';


interface Message {
  // text: string;
  reply : any;
  isUserMessage:boolean;
}

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent {
  // ref=new Subject:void()
  isExcel:any;
  isPdf:any;
  pdfSrc:any;
  name:string = "";
  jsonData:any;
  isLoading: boolean = false;
  loadingDots: string = '';
  file:any;
  messages:Message[] = [];
  newMessage:string = "";
  replyMsg:any;
  api = 'http://34.131.9.30:8081/Get_prompt_response';
  replyStyling:boolean = false;
  isWaitingForResponse: boolean = false;
  response_data:any;
  loading=false;
  response_message:any;
  displayTime:number=3000;
  //isexcel:boolean;
  //ispdf:boolean;
  
  constructor(private http:HttpClient,private dialogRef: MatDialog,private DataService:DataTransferService,private cdr: ChangeDetectorRef){
     this.isExcel=DataService.getFileData()
     this.isPdf=DataService.getisPdf()
  }


  openDialog() {

  const dialogRef = this.dialogRef.open(DialogComponentComponent, {
    
     width: '800px',
    
    //        data:{ content: this.fileContent }
    
  // data: { message: 'Hello, world!' } // Optional data to pass to the dialog
    
  });
    
    
    
    
  dialogRef.afterClosed().subscribe(result => {
    
    //        console.log('Dialog result:');
    
  });
    }

  getFile(event:any){
    this.isLoading = false;
    this.cdr.detectChanges();
    this.file=event.target.files[0]
    this.name= this.file.name;
    this.messages=[]
   this.isExcel=this.name.endsWith(".xlsx")
   this.isPdf=this.name.endsWith(".pdf")
   this.DataService.sendisPdf(this.isPdf)
   this.pdfSrc = URL.createObjectURL(this.file);
    this.DataService.sendsrc(this.pdfSrc)
   console.log(this.isExcel,"is excel in getFile method")
    this.DataService.sendFileData(this.isExcel)
    if(this.isExcel){
      const reader = new FileReader();
        reader.onload = (e: any) => {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: 'array' });
      
          // Process the workbook data as per your requirements
          // For example, you can access the first sheet:
          const worksheet = workbook.Sheets[workbook.SheetNames[0]];
          this.jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
          this.DataService.sendJsonData(this.jsonData)
          console.log(this.jsonData);
          console.log(typeof(this.jsonData),"type")
        };
      
        reader.readAsArrayBuffer(this.file);
    }
    console.log(this.file)
    console.log(this.name)
    this.uploadfile(this.file)
  }
  uploadfile(file: File){
    if(this.file){

      this.loading=true

      }
    let formData = new FormData();
    formData.set("file_name",this.name);
    formData.set("file",this.file);
    // console.log(this.file);
    this.http.post('http://34.131.9.30:8081/upload',formData).subscribe((response)=>{
      console.log(response);
      //alert("File uploaded successfully!");
      if (response){
      //debugger;
      this.response_data=response
      this.response_message=this.response_data.message;
      this.loading=false
      }else{
        //debugger;
        this.response_message = 'Unknown Error';
      }
        
      setTimeout(() => {

        // debugger
 
         this.response_message = '';
 
       }, this.displayTime);
       this.messages=[];
    })
  }

  sendMessage(){
    // console.log("working")
    this.isLoading = true;
    this.updateLoadingDots();
    if (this.newMessage.trim() !== '') {
      const msgSent = this.newMessage
      
      const message: Message = {
        reply: msgSent,
        isUserMessage: true 
      };
      this.messages.push(message);
      const data = {
        "prompt": this.newMessage
      }
      console.log(data)
      this.newMessage = "";
      this.isWaitingForResponse= true;
      this.http.post(this.api, data).pipe(
        map((result: any) => {
          
          this.replyStyling = true;
          console.log(result.Status)
          console.log(typeof result, "type");
          console.log(result);
      
          this.replyMsg = result.response;
          const message: Message = {
            reply: this.replyMsg,
            isUserMessage: false 
          };
          this.isLoading = false;
          this.updateLoadingDots();
      
          this.messages.push(message);
          this.isWaitingForResponse= false;
        })
      ).subscribe();
      // this.replyStyling = false; 
      
    }
  }



updateLoadingDots(): void {

  if (this.isLoading) {

    setInterval(() => {

      if (this.loadingDots.length < 3) {

        this.loadingDots += '.';

      } else {

        this.loadingDots = '';

      }

    }, 500);

  } else {

    this.loadingDots = '';

  }

}



}


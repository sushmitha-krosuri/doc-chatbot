import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DocChatbot';
  pdfSrc!: string;

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    this.pdfSrc = URL.createObjectURL(file);
  }
}

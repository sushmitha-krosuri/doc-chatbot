import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { ChatBotComponent } from './home/chat-bot/chat-bot.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { LoginService } from './services/login.service';
import { NotificationService } from './services/notification.service';
import { DialogComponentComponent } from './home/dialog-component/dialog-component.component';
import { MatDialogModule } from '@angular/material/dialog';
//import { LeftPanelComponentComponent } from './home/left-panel-component/left-panel-component.component';
import { DisplayExcelComponent } from './home/display-excel/display-excel.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { DisplayPdfComponent } from './home/display-pdf/display-pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    ChatBotComponent,
    //LeftPanelComponentComponent,
    DialogComponentComponent, DisplayExcelComponent, DisplayPdfComponent
  ],
  imports: [MatDialogModule,FormsModule,ReactiveFormsModule,NgxExtendedPdfViewerModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,ReactiveFormsModule,FormsModule,
    ToastrModule.forRoot({
      positionClass:'toast-top-right'
    }),
  ],
  providers: [LoginService,NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

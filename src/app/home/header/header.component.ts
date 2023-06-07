import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from 'src/app/services/authenticate.service';
// import { CommonService } from 'src/app/services/common.service';
// import { HeaderService } from 'src/app/services/header.service';
// import { LoaderService } from 'src/app/shared/loader/loader.service';
// import { environment } from 'src/environments/environment';
// import menuInfo from '../../shared/ndm_menu.json';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent {
  constructor(private http:HttpClient, private router:Router){
 }
  
  logout(){
   this.router.navigate(["login"]);
  
  }
}

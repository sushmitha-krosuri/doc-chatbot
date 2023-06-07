import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';


@Injectable()
export class LoginService {

    private isloggedIn: boolean=false;

    constructor(private http:HttpClient){}

    validateUser(body: any): Observable<any> {
        return this.http.post<any>(environment.apiUrl, body).pipe(catchError(this.handleError));
        
    }
    

    // setUserInLocalStorage(user: any) {
    //     // this.isloggedIn=true;
    //     this.isloggedIn = true;
    //     localStorage.setItem('userData', JSON.stringify(user));
    // }

    // isUserLoggedIn(): boolean {
    //   return this.isloggedIn;
    // } 

    // ChangePassword(body: any): Observable<any> {
    //     return this.http.post<any>(environment.apiUrl + "ChangePassword", body).pipe(catchError(this.handleError));
    // }

    
//   logout() {
//     localStorage.removeItem('userData');
//   }

    handleError(error: HttpErrorResponse) { 
        let msg = '';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          msg = error.error.message;
    
        } else {
          // server-side error
          msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    
        }
        return throwError(msg);
      }
}




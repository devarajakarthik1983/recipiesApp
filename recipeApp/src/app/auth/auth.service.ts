import { Injectable } from '@angular/core';
import { HttpClient,  HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


export interface AuthResponseData {
    kind: string,
    idToken: string,
    email:string,
    refreshToken: string,
    expriesIn: string,
    localId:string,
    registered?: boolean
}

@Injectable({
    providedIn:'root'
})
export class AuthService {
    constructor(private http: HttpClient){}

    signup(email:string , password: string , ) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB4Cy1NBMnk_0Mgz3XGoVm8ko04REzfMA0' , {
            email: email,
            password:password,
            returnSecureToken:true
        }).pipe(catchError(this.handleError))
    }

    login(email: string , password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB4Cy1NBMnk_0Mgz3XGoVm8ko04REzfMA0' , {
            email: email,
            password:password,
            returnSecureToken:true
        }).pipe(catchError(this.handleError))
    }

    private handleError(errRes: HttpErrorResponse) {
        let errMessage = 'AN uknown error occured';
            if(!errRes.error || !errRes.error.error) {
                return throwError(errMessage)
            }
            switch (errRes.error.error.message) {
                case 'EMAIL_EXISTS':
                    errMessage = 'The email already exists';
                    break;
                case 'EMAIL_NOT_FOUND':
                    errMessage = 'Email doesnot exist';
                    break;
                case 'INVALID_PASSWORD':
                    errMessage = 'Invalid Password';
                    break;            
            }
            return throwError(errMessage);
    
    }
 }
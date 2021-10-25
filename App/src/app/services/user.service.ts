import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';
import { throwError as observableThrowError, Observable } from "rxjs";
import { User } from "../models/User";
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class UserService {
    protected API_URL: string = environment.API_URL;

    constructor(private http: HttpClient){
    }

    delete(id: number): Observable<any>{
        return this.http
            .delete<any>(this.API_URL + `/user/${id}`);
    }

    insert(user: User): Observable<any>{
        return this.http
            .post<any>(this.API_URL + '/user', user).pipe(
                catchError((error: any) => observableThrowError(error)));
    }

    list(): Observable<any>{
        return this.http
            .get<any>(this.API_URL + '/user').pipe(
                map((res: Response) => res));
    }

    update(user: User): Observable<any>{
        return this.http
            .put<any>(this.API_URL + '/user', user).pipe(
                catchError((error: any) => observableThrowError(error)));
    }

}
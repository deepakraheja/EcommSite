import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../modals/Users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private BASE_API_URL = environment.BASE_API_URL;
  private _controllerName: string = "Users/";
  private _url: string = this.BASE_API_URL + this._controllerName;
  private _methodName: string = "";
  private _param: {};

  constructor(private _http: HttpClient) { }

  UserRegistration(_BrandObj: any): Observable<any> {
    this._methodName = "UserRegistration";
    this._param = _BrandObj;
    return this._http.post<any>(
      this._url + this._methodName, this._param
    );
  }

  ValidLogin(_BrandObj: any): Observable<Users[]> {
    this._methodName = "ValidLogin";
    this._param = _BrandObj;
    return this._http.post<Users[]>(
      this._url + this._methodName, this._param
    );
  }
}

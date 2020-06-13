import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private BASE_API_URL = environment.BASE_API_URL;
  private _controllerName: string = "Category/";
  private _url: string = this.BASE_API_URL + this._controllerName;
  private _methodName: string = "";
  private _param: {};

  constructor(private _http: HttpClient) { }

  GetCategory(_CategoryObj: any): Observable<any[]> {
    this._methodName = "GetCategory";
    this._param = _CategoryObj;
    return this._http.post<any[]>(
      this._url + this._methodName, this._param
    );
  }
  
}

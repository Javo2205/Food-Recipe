import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private _http: HttpClient) { }

  sendMessage(body) {
    return this._http.post(this.newMethod(), body);
    }


  private newMethod(): string {
    return "localhost:4200/contacto";
  }
}

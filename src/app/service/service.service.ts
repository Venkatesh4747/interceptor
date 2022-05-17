import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  postMethod(data:any){
    return this.http.post('https://f04d-103-213-192-118.ngrok.io/api/auth/login',data)
  }
}

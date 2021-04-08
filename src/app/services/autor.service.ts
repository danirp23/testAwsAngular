import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  constructor(private http: HttpClient) { 
    console.log("Usuario Service ok");
    
  }

  cargarData(){
    const url = "https://8a9wh9xgi1.execute-api.us-east-1.amazonaws.com/dev/v1/autor"

    return this.http.get(url);
  }
}

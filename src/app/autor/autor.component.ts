import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutorService } from '../services/autor.service';
import { Response } from "../models/reqres-response";

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {


  constructor(private autorService: AutorService) { }

  ngOnInit(): void {
    this.autorService.cargarData()
    .subscribe((resp: Response) => {
      console.log(resp);
    });
  }

  click() {
  }

}

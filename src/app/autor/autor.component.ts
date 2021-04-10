import { Component, OnInit } from '@angular/core';
import { AutorService } from '../services/autor.service';
import { Response } from "../models/reqres-response";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {

  public contactForm: FormGroup;
  // tslint:disable-next-line: max-line-length
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  constructor(private autorService: AutorService) {
    this.contactForm = this.createForm();
  }

  ngOnInit(): void {
    
  }

  createForm() {
    return new FormGroup({
      email: new FormControl(''),
      name: new FormControl(''),
      city: new FormControl('')
    });
  }

  onResetForm(): void {
    this.contactForm.reset();
  }

  onSaveForm(): void {
    if (this.contactForm.valid) {
      this.autorService.guardarData(this.contactForm.value)
      .subscribe((resp: Response) => {
        console.log(resp);
      });
      this.onResetForm();
    }
  }

}

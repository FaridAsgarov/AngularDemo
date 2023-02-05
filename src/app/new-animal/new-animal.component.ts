import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-new-animal',
  templateUrl: './new-animal.component.html',
  styleUrls: ['./new-animal.component.css']
})
export class NewAnimalComponent {
  newAnimal = "";
  constructor(private http: HttpClient){

  }

  update(event: any){
    this.newAnimal = event.target.value;
    console.log(this.newAnimal);
  }

  save(){
    this.http.post("http://localhost:8080/animals/safe",{name: this.newAnimal}, {headers: new HttpHeaders({
      'Content-Type':  'application/json'})
    }).subscribe(()=>console.log("sent"));
  }
}

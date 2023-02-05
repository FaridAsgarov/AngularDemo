import { Component } from '@angular/core';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent {
  name="Farid";

  calculate(){
    if(this.name!="Farid"){
     return this.name="Farid";
    } else return this.name = "Javid";
  }
}

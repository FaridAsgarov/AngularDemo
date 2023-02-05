import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fe-demo';
  animals = [""];
  constructor(private http: HttpClient){
    this.getAnimals();
  }

  getAnimals(){
    this.http.get<string[]>("http://localhost:8080/animals/safe").subscribe((response: string[]) => this.animals = response );
  }
}

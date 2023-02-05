import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DogComponent } from './dog/dog.component';
import { HttpClientModule } from '@angular/common/http';
import { NewAnimalComponent } from './new-animal/new-animal.component';

@NgModule({
  declarations: [
    AppComponent,
    DogComponent,
    NewAnimalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

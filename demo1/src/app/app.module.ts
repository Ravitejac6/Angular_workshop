import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { IngredientComponent } from './components/ingredient/ingredient.component';
import { HttpClientModule } from '@angular/common/http';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatButtonModule} from '@angular/material/button';
// import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    IngredientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // BrowserAnimationsModule,
    // MatButtonModule, MatCheckboxModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
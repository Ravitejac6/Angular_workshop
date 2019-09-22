import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { IngredientComponent } from './components/ingredient/ingredient.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { PizzaComponent } from './components/pizza/pizza.component';
import { HomeComponent } from './components/home/home.component';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatButtonModule} from '@angular/material/button';
// import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    IngredientComponent,
    PizzaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AuthModule,
    AppRoutingModule
    // BrowserAnimationsModule,
    // MatButtonModule, MatCheckboxModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorDisplayComponent } from './calculator/calculator-display/calculator-display.component';
import { CalculatorNumPadComponent } from './calculator/calculator-num-pad/calculator-num-pad.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    CalculatorDisplayComponent,
    CalculatorNumPadComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

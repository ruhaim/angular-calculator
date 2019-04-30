import { Component, OnInit } from '@angular/core';
import { CalculatorModes } from './calculator-modes.enum';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.sass']
})
export class CalculatorComponent implements OnInit {
  screeenValue ="0";
  calcMode : CalculatorModes = CalculatorModes.RESET;
  num1 : string = "0";
  num2 : string;
  operator : string = "";



  constructor() { }

  ngOnInit() {
  }

  onOperatorClick(event){
    let value = event.target.getAttribute("data-value");
    let tempOperator = this.operator
    switch(this.calcMode){
      case CalculatorModes.RESET:
        this.num1 = "0";
        this.operator = value;
        this.calcMode = CalculatorModes.OPERATOR_INPUT;
        break
      case CalculatorModes.FIRST_NUMBER_INPUT:
        this.num1 = this.screeenValue;
        this.operator = value;
        this.calcMode = CalculatorModes.OPERATOR_INPUT;
        break
      case CalculatorModes.OPERATOR_INPUT:
        this.operator = value;
        break
      case CalculatorModes.SECOND_NUMBER_INPUT:
        this.num2 = this.screeenValue;
        this.screeenValue = eval(parseFloat(this.num1) + this.operator + parseFloat(this.num2))
        this.operator = value; 
        this.num1 = this.screeenValue;
        this.num2 = "";

        this.calcMode = CalculatorModes.OPERATOR_INPUT;



        break
    }
    if(value === "="){
      this.operator = tempOperator;
      this.calcMode = CalculatorModes.OPERATOR_INPUT;
      if(tempOperator === ""){
        this.calcMode = CalculatorModes.FIRST_NUMBER_INPUT;
      }
    }

    //this.screeenValue = this.num1;
    console.log(event)
  }
  appendToScreenValue(value){
    let tmpNum = this.screeenValue + value;
    var floatValues =  /[+-]?([0-9]*[.])?[0-9]+/;
    if (tmpNum.match(floatValues) && !isNaN(tmpNum as any)) {
      this.screeenValue = tmpNum;
    }
  }
  onOperandClick(event){
    let value = event.target.getAttribute("data-value");
    
    switch(this.calcMode){
      case CalculatorModes.RESET:
      case CalculatorModes.EQUALS:
        this.screeenValue = value;
        this.num1 = value;
        this.calcMode = CalculatorModes.FIRST_NUMBER_INPUT;
        break
      case CalculatorModes.FIRST_NUMBER_INPUT:
        this.appendToScreenValue(value);
        this.num1 = this.screeenValue;
        break
      case CalculatorModes.SECOND_NUMBER_INPUT:
        this.appendToScreenValue(value);
        this.num2= this.screeenValue;
        break;
      case CalculatorModes.OPERATOR_INPUT:
        this.screeenValue = value;
        this.num2 = value;
        this.calcMode = CalculatorModes.SECOND_NUMBER_INPUT;
        break


    }
    console.log(event)
  }

  onClearClick(event){
    this.num1 ="0";
    this.operator = "";
    this.screeenValue ="0";
    this.calcMode = CalculatorModes.RESET;

  }

  onFractionalClick(event){
    let value = "."
    switch(this.calcMode){
      case CalculatorModes.RESET:
      case CalculatorModes.EQUALS:
        this.screeenValue = "0"+value;
        this.num1 = "0"+value;
        break
      case CalculatorModes.FIRST_NUMBER_INPUT:
        this.appendToScreenValue(value);
        this.num1 = this.screeenValue;
        break
      case CalculatorModes.SECOND_NUMBER_INPUT:
        this.appendToScreenValue(value);
        this.num2= this.screeenValue;
        break;
      case CalculatorModes.OPERATOR_INPUT:
        this.screeenValue = value;
        this.num2 = value;
        this.calcMode = CalculatorModes.SECOND_NUMBER_INPUT;
        break


    }
    console.log(event)

  }



}

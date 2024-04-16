const prompt = require('prompt-sync')();
var number1=parseInt(prompt("Enter the first number: "));
var number2=parseInt(prompt("Enter the second number: "));
var operator=prompt("Choose an operator from {+,-,*,/}: ");
var total=0;

switch(operator){
    case '+':{
        total=number1+number2;
        /*if(number1 || number2 ==NaN){
            return console.log("Please enter the correct values");
        }*/
        console.log(`the results of ${number1} + ${number2} = ${total}`);
        break;
    }
    case '-':{
        total=number1-number2;
       /* if(number1 || number2 ==NaN){
            return console.log("Please enter the correct values");
        }*/
        console.log(`the results of ${number1} - ${number2} = ${total}`);
        break;
    }
    case '*':{
        total=number1*number2;
       /* if(number1 || number2 ==NaN){
            return console.log("Please enter the correct values");
        }*/
        console.log(`the results of ${number1} * ${number2} = ${total}`);
        break;
    }
    case '/':{
        total=number1/number2;
        if(total==Infinity){
        return console.log("You cant divide by 0");
        }
       /* if(number1 || number2 ==NaN){
            return console.log("Please enter the correct values");
        }*/
        console.log(`the results of ${number1} / ${number2} = ${total}`);
        break;
    }
    default:{
        console.log("Choose the correct operator!")
    }
}

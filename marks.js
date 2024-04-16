for(let i=0;i<3;i++){

const prompt=require('prompt-sync')();
var name=prompt("Enter your name: ")
var mark1 = parseInt(prompt("Enter your first mark: "));
var mark2 = parseInt(prompt("Enter your second mark: "));
var mark3 = parseInt(prompt("Enter your third mark: "));

var sum = mark1 + mark2 + mark3;
const average = sum / 3;
var status;

if(average < 50){
    status=`Failed with an average mark of: ${average} `;
  //console.log(`${name} You Fail with an average mark of : ${average}`);
}
else if(average >= 50 && average<75){
    status=`Passed with an average mark of: ${average}`;
 // console.log(`${name} You Passed with an average mark of : ${average}`)
}
else if(average >= 75 && average<=100){
    status=`Passed with Distinction with an average mark of: ${average}`;
    //console.log(`${name} You Passed with Distinction with an average mark of : ${average}`)
}
else if(average >100){
    status='Please check your inputs';
//console.log(`${name}Please check your inputs`)
}
else{
    status='Enter the correct marks';
    //console.log(`${name}Enter the correct marks`)
}
console.log(name+"  "+status);

}









/*switch(average){
    case average<50:{
        console.log("fail")
        break;
        };
        case average>=50 && average<75:{
        console.log("Pass")
        break;
        };
        case average>=75 &&average<=100:{
        console.log("Pass with D")
        break;
        };
        case average>100:{
        console.log("Check your inputs")
        break;
        };
        default:{
            console.log("Enter you correct marks!")
        }
}*/
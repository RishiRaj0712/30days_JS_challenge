let num1 =121;
if(num1==0)console.log("Zero");
else if(num1>0)console.log("Positive");
else console.log("Negative");

let age =12;
if(age>=18)console.log("Eligible to vote");
else console.log("Not Eligible to vote");

let num2 =-312;
let num3  =-231;

if(num1>num2){
    if(num1>num3)console.log(num1);
    else console.log(num3);
}
else{
    if(num2>num3)console.log(num2);
    else console.log(num3);
}

// enter day {1-7}
let day = 12;
switch (day) {
    case 1 :
        console.log("Monday");
        break;
    case 2 :
        console.log("Tuesday");
        break;
    case 3 :
        console.log("Wednesday");
        break;
    case 4 :
        console.log("Thursday");
        break;
    case 5 :
        console.log("Friday");
        break;
    case 6 :
        console.log("Saturday");
        break;
    case 7 :
        console.log("Sunday");
        break;
    default:
        console.log("provide day in btw 1-7");
        break;
}

let score = 96;
switch (true) {
    case score >89 && score <=100:
        console.log("Grade A");
        break;

    case score >79 && score <=89:
        console.log("Grade B");
        break;

    case score >69 && score <=79:
        console.log("Grade C");
        break;
    case score >59&& score <=69:
        console.log("Grade D");
        break;
    case score <60:
        console.log("Grade F");
        break;
    default:
        console.log("Provide marks btw 1-100");
        break;
}


num1>=0 ? console.log("Positive") : console.log("Negative");

let year = 2000;
if(year % 4 ==0){
    if(year %400==0) console.log("leap year");
    else console.log("Not a leap year");
}
else console.log("Not a leap year");
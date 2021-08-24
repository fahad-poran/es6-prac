const hubby = "elias kanchon";
console.log(hubby);

const numbers = [12,45];

numbers[1] = 88;
numbers.push(12);
console.log(numbers);

let patientname = "rahim";

patientname = "karim";
let sum = 0;
//scope variable  
//if we use let it can b acc ouside of the {}
for(var i= 0; i<10;i++){
    sum = sum+i;
}
console.log(i);
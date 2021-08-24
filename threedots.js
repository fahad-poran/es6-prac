const ages= [122,12,4,16,22];
const ages2 = [15,16,12];
const ages3 = [12,55,62,64];
const addAges = ages.concat(ages2).concat([5]).concat(ages);

//to make it cleaner
//spread operator
const allAges = [...ages,...ages2,5,...ages3];
// console.log(addAges);
console.log(allAges);

const busi = 504;
const minis = 450;
const sob = 250;
const allMoney = [504,450,250];
const maxi = Math.max(busi,minis,sob);
console.log(maxi);
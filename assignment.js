//  -------------------------
// problem no 1
// ---------------------------
function seerToMon(seer){
    //error handle
    if(seer<0 || typeof seer != 'number'){
        return 'You Should give positive number value';
    }
    // formula to convert seer to mon
    var toMon = seer / 40 ;
    return toMon; 
}
var mon = seerToMon(81);
console.log("Conversion Seer To Mon: ",mon);

//  -------------------------
// problem no 2
// ---------------------------

function totalSales(shirt=0,pant=0,shoe=0){ //setting up some default values
    if(typeof shirt == 'number'){

        if(shirt < 0 || shirt < 0 || pant < 0){
            return 'enter valid  positiveamount';
        }
        //price per items
        let shirtPrice = 100;
        let pantPrice = 200;
        let shoePrice = 500;
    
        const totalShirtPrice = shirtPrice * shirt;
        const totalPantPrice = pantPrice * pant;
        const totalShoePrice = shoePrice * shoe;
    
        const totalSold = totalShirtPrice + totalPantPrice + totalShoePrice;
        return totalSold;
    }
        else return 'Please Give only number';
}
console.log("Total Sales: ",totalSales(2,6,2));

//  -------------------------
// problem no 3
// ---------------------------

function deliveryCost(shipItem){
    
    if(typeof shipItem == 'number' && shipItem > 0){
        var first100itemsCost = 100;
    var first200itemsCost = first100itemsCost * 100 + first100itemsCost * 80;
    var totalDeliveryCost = 0;
    if(shipItem < 100){
        totalDeliveryCost *= first100itemsCost; 
        return totalDeliveryCost;
    } 
    else if (shipItem <= 200 ){
        var extraItems = shipItem - first100itemsCost;
        var extraCosts = extraItems * 80;
        totalDeliveryCost = first100itemsCost * 100 + extraCosts;
        return totalDeliveryCost;
    }
    else if (shipItem > 200){
        var extraItems = shipItem - 200;
        var extraCosts = extraItems * 50;
        totalDeliveryCost = first200itemsCost + extraCosts;
        return totalDeliveryCost;
    }
    }else return 'valid Please give a positive number';
    
    
} //upto cost 100/ delivery cost will be added 80/- upto 200 50/
console.log("Delivery Cost will be: ",deliveryCost(202));

//  -------------------------
// problem no 4
// ---------------------------

function perfectFriend(names){
    // for (var i = 0;i<names.length;i++)
    for(var name of names){

        if(typeof name != "string")
        // return 'Give valid names';
        continue;        

        else{
        if(name.length == 5) return name;   
    }
}return 'your perfact friend dose not exist';
} //string name return of 4char
console.log(perfectFriend(['Faim','fahmida',0,'ratal']));

//return string

function reverseString(s) {
    var len = s.length;
    var a="";
    
    for (var i=len-1;i>=0;i--){
         a += s[i];
    }
    return a;
}
console.log(reverseString("1234"));

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    // return [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ][(new Date(dateString)).getDay()];
    dayName = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saterday', 'Sunday'][new Date (dateString).getDay()];
    return dayName;
}
console.log(getDayName("12/1/2009"));

// let sum= 0;
// for (var i=6;i >= 1 ; i--){
//     sum = sum +i;
// }
// console.log(sum);

// --------------- recursion ========

// function sum(i){
//     if(i == 1){
//         return 1;
//     }
//     return sum(i-1) + i;
// }
// console.log(sum(5));


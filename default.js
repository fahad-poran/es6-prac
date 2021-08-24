// map1 contains
// 1 => 2
// 2 => 3
// 4 -> 5
var map1 = new Map([[1 , 2], [2 ,3 ] ,[4, 5],[5,7]]);

//console.log("Map1");
// console.log(map1);

// map2 contains
// firstname => sumit
// lastname => ghosh
// website => geeksforgeeks
var map2 = new Map([["firstname" ,"sumit"],
		["lastname", "ghosh"], ["website", "geeksforgeeks"]]);

// console.log("Map2");
// console.log(map2);


// map3 contains
// Whole number => [1, 2, 3, 4]
// Decimal number => [1.1, 1.2, 1.3, 1.4]
// Negative number => [-1, -2, -3, -4]
var map3 = new Map([["whole numbers", [1 ,2 ,3 ,4]],
			["Decimal numbers" , [1.1, 1.2, 1.3, 1.4]],
			["negative numbers", [-1, -2, -3, -4]]]);

// console.log("Map3");
// console.log(map3);


// map 4 contains
// storing ars both as key and value
// "first name ", "Last name" => "sumit", "ghosh"
// "friend 1", "sourav" => "friend 2", "gourav"
var map4 = ([[["first name", "last name"],
			["sumit", "ghosh"]],
			[["friend 1", "friend 2"],
			["sourav","gourav"]]]);

// console.log("Map4");
var x = new Map(map4);
//console.log(x);

var a = [2,5,1,8];
var b = a;
b[1] = 234;
//so this is called reference type;
console.log(a);


var names = ['hamim','fahim','jubaer','jamil'];

for (var i = 0;i<names.length;i++){
	console.log(names[i]);
}

var a = {a:'name', b:'roll'};

////console.log(a.b);//
function isMoonUp(time){
	if(time >= 15 ){
		return true;
	}
	return false;
}
var a = isMoonUp(20);
console.log(a);

//conversion 

// var inches = 220;
// var feet = inches /12;

console.log(feet);

function feet(inches){
	var ans = inches/12;
	return ans;
}
var a = feet(23);
console.log(a);

function mileToKilo(miles){
	var km = miles* 1.56645;
	console.log(km);
}
mileToKilo(12);

//reminder
function myNumber(num){
	if(num % 2 != 0){
		console.log('thik ase');
	}
	return false;
}
myNumber(2);

// var factorial = 1;

// for (var i = 1; i<=5 ; i++){
	
// factorial *= i;
// }
// console.log(factorial);

// const myNum = -5.555;
// const output = Math.ceil(myNum);


// console.log(output); 

// var io = 5;
// var os = 4;
// //destructing 
// [io,os]=[os,io];
// console.log(io,os);




// function larVal(ar){
// 	var la = 0;

// 	for(var i = 0;i<ar.length;i++){
	
// 		var ca = ar[i];
// 		if(la <= ca){
// 			la = ca;
// 		}
// 	}return la;

// }
// var ou = larVal([2,3,66,32,7,12]);
// console.log(ou);

// ----------- Fabonachi Series ------------------//

// function fibSer(num){
//  var a = [0,1];
//  for (var i = 2; i<=num; i++){
// 	a[i] = a[i-1] + a[i-2];

//  }console.log(a);
// }

// fibSer(5);


//  var i = 0;
//  while(i<100){
// 	var ran = Math.round(Math.random()*10);
// 	console.log(ran); 
// 	i++;
//  } 

// -------------- sum up array num ===============//

var i = [2,2,3];

var add = 0;
for (var o = 0; o<i.length;o++){
	 add += i[o];
}console.log(add);

// var t = Math.max(2,53,11,77);
// console.log(t);


var t = Math.floor(2.66);
console.log(t);

function larNum(num){
	let max = num[0];
	for(let i = 0 ; i<num.length;i++){
		const element = num [i];
		if(element>max){
			max = element
		}
	}
	return max;
}

var m = larNum([2,3,5,1,55,12,66]);
console.log(m);
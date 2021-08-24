// 6! = 6*5*4*3*2*1 
var fact = 1;
for(var i = 6 ;i>=1;i--){
    fact *= i;
}
console.log(fact);

//recursive

function factorial(i){
    if(i==1)return 1;
    return factorial(i-1) *i;
}
console.log(factorial(6));

//fibonachi series;;

 fibo = [0,1];
// for (var i=2;i<=6;i++){
//     fib[i] = fib[i-1] + fib[i-2];
// }
// console.log(fib);

function fib(i){
    if(i==0)return 0;
    if(i==1) return 1;
    return fibo[i] = fib(i-1) + fib(i-2);
}
console.log(fib(6));

const products = [
    {name:'iphone',price: 20000},
    {name:'iphone5',price: 20000},
    {name:'iphone6',price: 34000},
    {name:'iphone7',price: 30000},
    {name:'iphone8',price: 40000},
    {name:'iphoneX',price: 50000},
    {name:'iphone11',price: 60000},
    {name:'iphone12',price: 70000},
    {name:'iphone13',price: 120000},
]
function searchProducts(products,searchText){
    const watch = [];
    for (const product of products){
        // console.log(product);

        // if(searchText == product.name){
        //     console.log(product);
        // }
        const name = product.name;
        const price = product.price;
        if(name.indexOf(searchText) != -1){
            // console.log(name);
            watch.push(name);
        }
    }return watch;
}
console.log(searchProducts(products,'1'));
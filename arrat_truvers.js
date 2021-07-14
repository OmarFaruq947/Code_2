var arr = [1,2,3,4,5,6,7,8,9,10,5];

var even = 0;
var odd = 0;

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element % 2 == 0) {
        console.log('even number is: ',element);
        even +=element;   
    }
    else if( element % 2 !== 0){
        console.log("odd number is .................. ",element);
        odd +=element;
    }
}
console.log('sum of even number: ',even);
console.log('sum of odd number................',odd);


if (even == odd) {
    console.log("even number & odd number is not equal.");
}else{
    console.log("even = odd.");
}
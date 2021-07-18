// Recurcive function....



// function myName(n) {
//     if (n === 0) {
//         return
//     }
//     console.log("Omar Faruq");
//     myName(n-1)
// }
// myName(10);




// even number with recurcive function....
var sumEven=0;
var sumOdd=0;
function even(num) {
    if (num === 0) {
        return
    }
    else if( num%2 == 0){
        sumEven +=num;
        console.log('even number is: ...........................',num);
    }

    else if( num%2 !== 0){
        sumOdd +=num;
        console.log('Odd number is: ',num);
    }

    even (num-1)
}
even(10);
console.log("sum Of EVEN number: ......................",sumEven);
console.log("sum Of ODD number: ",sumOdd);

if (sumEven == sumOdd) {
    console.log('you are laky man');
}
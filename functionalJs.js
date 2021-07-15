// function a(n) {
//     return n*n
// }
// console.log(a(3));
// console.log(a(5));
// console.log(a(10));



var arr = [1,2,3,4,5,6,7,8,9,78,955,661,25,]
// var result = arr.find(function(value, index){
//     return value ===9
// })

// console.log(result);





// var result = arr.findIndex(function(value){
//     return value ===9
// })

// console.log(result);





function myFind(arr, cd){
    for (let i = 0; i < arr.length; i++) {
        if (cd(arr[i])) {
            return arr[i]
        }
        
    }
}

var result = myFind(arr, function(value){
    return value ===9
})


console.log(result);
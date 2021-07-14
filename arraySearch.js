var arr = [1,2,3,4,5,6,7,8,9,10,5];

var data = 10;
var isFound=false;
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === data) {
        console.log("data is found........",'index is: ',i );
        isFound=true;
        break;
    }
}

if (!isFound) {
    console.log("data is not found.");
}



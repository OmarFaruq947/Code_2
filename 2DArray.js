var twoD = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

// console.log(twoD);
// console.log('first row',twoD[0][0]);
// console.log('second row',twoD[1][1]);
// console.log('third row',twoD[2][2]);
//console.log('third row',twoD[i][k]);

for (let i = 0; i < twoD.length; i++) {
   
    for (let k = 0; k < twoD[i].length; k++) {
        const element2 = twoD[i][k];
        console.log('element '+ i +': '+ element2);
        
    }
} 
var obj = {
    name: 'omar',
    age: '25',
    color: 'black'
}


console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log( Array.isArray (Object.entries(obj)));


var obj2 = Object.assign({}, obj);
console.log(obj2);
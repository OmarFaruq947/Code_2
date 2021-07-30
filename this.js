var rect = {
    with :50,
    height: 100,

    draw: function () {
        console.log("I am faruq");
        this.printPropertics
    },

    printPropertics: function () {
        console.log("my name is omar", rect.with);
        console.log("my name is faruq", rect.height);
    }
    
}

console.log(rect);
rect.draw()
rect.printPropertics()
rect.height






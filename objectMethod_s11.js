var Cat = {
    name : "Klow",
    age : "18 month",
    weight : 3,
    sayHello : function() {
        console.log("hello my name is", this.name);
    },
    eat : function eatMouse(Mouse) {
        console.log(Mouse.name + ' seem very dilicous, now i will eat u')
        console.log('haha my weight now is',this.weight = this.weight + Mouse.weight +"kg")
    }

};
var Mouse = {
    weight : 2, 
    name : 'Mickey',
    sayhello : function() {
        console.log('hello my name is ',this.name)
    },
    run: function meetCat(Cat) {
        console.log("Don't eat me im very scare",Cat.name)
    }
};

Mouse.run(Cat)

Cat.eat(Mouse)
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/testdb")
const User = require("./User")






run()

async function run() {
const user = await ({ 
    name: "Kyle", 
    age: 26,
    hobbies: ["weight Lifting", "Bowling"], 
    adress: {
        street: "Main st",
    },
})

    //const user = new User({ name: "kyle", age: 26 })
//await user.save()
console.log(user)
}




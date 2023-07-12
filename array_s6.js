var Thach = {
    age : 18,
    smarter : true,
}
var Hung = {
    age : 18,
    smarter : false,
}
var nameStudent =[Thach,Hung];
console.log(nameStudent[1])

var Dan = {
    age: 19,
    smarter: false
}
nameStudent[0] = Dan;
console.log(nameStudent[0])



var phoneNumberMyFriend = [
    {name:"thach",phone:113},
    {name: "hung",phone: 114}
]
console.log(phoneNumberMyFriend[0])

var phoneNewThach = {
    name: "thach",
    number: 89893
}
phoneNumberMyFriend[0] = phoneNewThach
console.log(phoneNumberMyFriend[0])
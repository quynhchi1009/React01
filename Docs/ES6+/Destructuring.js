var array = ["JS", "PHP", "Ruby"];
var [a, , c] = array;
console.log(a, c);

//Rest parameters
var [a, ...rest] = array;
console.log(rest) //["PHP", "Ruby"]


var course = {
    name: "JS",
    price: 1000,
    image: "img-add",
    children: {
        name: "React"
    },
}
var { name: parentName, children: {name} } = course;
console.log(name); //React
console.log(parentName); //JS

var { name, ...newObj } = course;
console.log(newObj);

var { description = "default" } = course;
console.log(description) //default



//Sample
const {
    a = 'default',
    b,
    ...rest
} = {
    b: 'val1',
    c: 'val2',
    d: 'val3'
};
console.log(a, b, rest); //"default", "val1", {c : "val2", d: "val3"}
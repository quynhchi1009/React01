/////ARRAY
var array = ["JS", "PHP", "Ruby"];
var [a, , c] = array;
console.log(a, c);

//Rest parameters
var [a, ...rest] = array;
console.log(rest) //["PHP", "Ruby"]

function logger2([a, ...rest]) {
    console.log(a);
    console.log(rest);
}
logger2([1, 2, 3, 4, 5, 6, 8, 5]);



////OBJECT
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

//Rest Sample2
function logger(a, ...params) {
    console.log(params);
}
logger(1, 2, 3, 4); //2, 3, 4

function logger2({ name, ...rest }) {
    console.log(name);
    console.log(rest);
}
logger2({
    name: "JS",
    price: 1000
})


//////Sample
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
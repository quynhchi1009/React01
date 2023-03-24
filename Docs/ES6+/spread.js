var array1 = ["JS", "Ruby"];
var array2 = ["React", "Dart"];
var array3 = [...array2, ...array1];

function logger(...rest) {
    for (let index = 0; index < rest.length; index++) {
        console.log(rest[index]);   
    }
}

var obj1 = {
    name : "JS"
}
var obj2 = {
    price: 1000
}
var obj3 = {
    ...obj1,
    ...obj2
}
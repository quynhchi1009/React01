//1. Dinh nghia key: value cho object
//2. Dinh nghia method cho object
//3. Dinh nghia key cho object duoi dang bien

var name = "JavaScript Basic";
var price = 100;
var course = {
    name,
    price,
    getName() {
        return name;
    }
};
console.log(course.getName());

var fieldname = "Name";
var fiedPrice = "Price";
var course = {
    [fieldname]: name,
    [fiedPrice]: 1000
}
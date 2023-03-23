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

/**
 * It takes an array of arrays, and returns an object with the first element of each array as the key,
 * and the second element as the value
 * @param arr - an array of arrays
 * @returns { a: 1, b: 2, c: 3 }
 */
function arrToObj(arr) {
    let obj = {};
    arr.forEach(item => {
        obj[item[0]] = item[1];
    });
    console.log(obj)
    return obj;
}
// Expected results:
/**
const obj1 = arrToObj([
   ['name', 'Son Dang'], 
   ['age', 21], 
   ['address', 'Ha Noi']
])
console.log(obj1)
Output: { name: 'Son Dang', age: 21, address: 'Ha Noi' }

const obj2 = arrToObj([
   ['name', 'Duc Long'], 
   ['age', 18], 
   ['address', 'Ha Noi']
])
console.log(obj2)
Output: { name: 'Duc Long', age: 18, address: 'Ha Noi' }
*/
//VD1
const logger = function (log) {
    console.log(log);
}

const logger2 = (log) => {
    console.log(log);
}

const logger3 = log => console.log(log);

const sum = (a, b) => a + b;

const sum2 = (a, b) => ({ a: a, b: b });

logger("Messages");

//VD2
const obj = {
    name: "JavaScript Basic",
    getName: function () {
        return this.name;
    }
};
console.log(course.getName());

const Course = (name, price) => {
    this.name = name;
    this.price = price;
}
const jsCourse = new Course("JS", 100);
console.log(jsCourse)
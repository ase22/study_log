function obj1(arg) {
    const a = arg;
}
const example1 = new obj1(3);
const example2 = new obj1(6);
obj1.prototype.good = 5;
console.log(example1.good);
console.log(example2.good);
console.dir(example1);
console.dir(example2);
function obj2() {
    const b = 2;
}
const example3 = new obj2();


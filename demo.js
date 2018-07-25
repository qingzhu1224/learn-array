var arr = ['a','b','c','d','e','f','g','h','i','j'];
for(var i = 0, len = arr.length; i < len; i++ ) {
    console.log('i', i);
}
console.log('外部的i', i)


var arr = ['a','b','c','d','e','f','g','h','i','j'];
for(let i = 0, len = arr.length; i < len; i++ ) {
    console.log('i', i);
}
console.log('外部的i', i) /**此时i报错， i is not defined*/

var arr = ['a','b','c','d','e','f','g','h','i','j'];
arr.forEach((item, idx) => {
    console.log('item', item);
    console.log('idx', idx);
});


var arr = ['a','b','c','d','e','f','g','h','i','j'];
for(var i in arr) {
    console.log(i);
}
console.log('外部的i', i) /**i为9 */


var arr = ['a','b','c','d','e','f','g','h','i','j'];
for(var i of arr) {
    console.log(i);
}
console.log('外部的i', i) /**i为9 */


for(let index in myObject){

    if(myObject.hasOwnProperty(index)){

        console.log(index)

    }

}


Array.prototype.max = function() { return 1}

const seats = [1,2,3,4];

let total = 0;

for(const i in seats) { total += parseInt(i, 10)}

console.log(total)


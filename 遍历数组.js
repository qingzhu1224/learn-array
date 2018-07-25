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


for(let key of myArray){

    console.log(key);

}

var obj = {name: 'yqz', age: 28};
for(let [key, value] of obj) {
    console.log('key', key);
    console.log('value', value);
}


for(var key in arr) {
    if(arr.hasOwnProperty(key)) {

    }
}

let iterable = new Map([['a', 1], ['b', 2], ['c', 3]]);

for (let entry of iterable) {
  console.log(entry);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (let [key, value] of iterable) {
  console.log(value);
}


function every() {
    if(!Array.prototype.every) {
        Array.prototype.every = function(fun) {
            'use strict';
            // 判断this是否为undefined和null,否则抛出new TypeError()
            if(this === void 0 || this === null) throw new TypeError();
            //把原生类型变成对象类型，如'foo' 变成 new String('foo')
            var t = Object(this);
            //转换成数字类型，如NaN >>> 0 为0
            var len = t.length >>> 0;

            // 判断fun类型是否是function
            if(typeof fun !== 'function') throw new TypeError();

            //判断参数个数，如果多于两个
            var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
            for(var i = 0; i < len; i++) {
                if(i in t && !fun.call(thisArg, t[i], i, t)) return false;
            }
            return true;
        }   
    }
}
数组方法
========================
>1.遍历数组的方法
   
    1.var len = arr.length; for(var i = 0; i<len;i++>)    
    2.for(var i = 0, len = arr.length; i<len;i++>)       
    3.arr.forEach((item,idx) => {})     
    4.for(j in arr)    
    5.for(let j of arr) ES6支持

>2.for in 和for of区别      

`for in`首先输出的是对象的属性名，再是对象原型种的属性和方法；如果不想让其输出原型中的属性和方法，可以使用`hasOwnProperty`进行过滤。`for in`遍历数组存在不足之处：1.index索引为字符串型数字，不能直接进行几何运算；2.遍历顺序有可能不是按照实际数组的内部顺序。3.使用for in会遍历数组所有的可枚举属性，包括原型。例如上栗的原型方法method和name属性。 用来遍历对象   

`for of`遍历的是数组元素值；`for...of`语句在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句.用来遍历数组或类数组


>3.给Array/String添加原型方法

>4.Array的属性有length和prototyp  Array.length / Array.prototype

>5.能改变自身的方法有：pop()/push()/unshift()/shift()/reverse()/sort()/splic()

>6.不改变自身的方法：concat()/join()/slice()/indexOf()/lastIndexOf()/toString()/toLocalString()

>7.`slice() `方法返回一个从`开始到结束（不包括结束）`选择的数组的一部分浅拷贝到一个新数组对象。且原始数组不会被修改。


>8.遍历方法 forEach()/every()/some()/filter()/find()/findIndex()/keys()/map()/reduce()/reduceRight()/values()/



字符串操作
=============================

>1.length/indexOf()/trim()/split()/substr()/substring()/toUppercase()/toLowerCase()/
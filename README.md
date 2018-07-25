数组方法
========================
>1.遍历数组的方法
    1.var len = arr.length; for(var i = 0; i<len;i++>)    
    2.for(var i = 0, len = arr.length; i<len;i++>)       
    3.arr.forEach((item,idx) => {})     
    4.for(j in arr)    
    5.for(let j of arr) ES6支持

>.for in 和for of区别      
    `for in`首先输出的是对象的属性名，再是对象原型种的属性和方法；如果不想让其输出原型中的属性和方法，可以使用`hasOwnProperty`进行过滤
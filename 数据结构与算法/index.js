// 数组扁平化
let arr = [1,
  [1, 2, 3],
  [3, 4],
  [4, 5, [6, 7, [10]]]
]
let res = [1, 2, 3, 3, 4, 4, 5, 6, 7, 10]

// ES6的扩展运算符、some方法
// function flatten(arr) {
//   while (arr.some(item => Array.isArray(item))) {
//     arr = [].concat(...arr)
//   }
//   return arr
// }

// join()方法、
// function flatten(arr) {
//   return arr.join(",").split(",").map(item => parseInt(item))
// }

// toString() 方法、 split() 方法和Number() 方法
// function flatten(arr) {
//   let res = arr.toString().split(",").map(item => Number(item))
//   return res
// }


// forEach()方法、map()方法、concat()方法
// function foo(arr) {
//   let res = []
//   arr.forEach(item => Array.isArray(item) ? res = res.concat(foo(item)) : res.push(item))
//   return res
// }

console.log(flatten(arr))
var line = '1 22 22 33 22 12 45 44 5'

function foo(line) {
  let arr = line.split(" ").map(item => Number(item))
  let len = arr.length
  let res = []
  if (len <= 1) return
  if (len >= 2) {
    if (arr[0] > arr[1]) {
      res.push(1)
    }
    var first = Math.max(arr[0], arr[1])
    var second = Math.min(arr[0], arr[1])
  }
  for (let i = 2; i < len; i++) {
    if (arr[i] < first && arr[i] >= second) {
      res.push(i)
      second = arr[i]
    } else if (arr[i] > first) {
      second = first
      first = arr[i]
    }
  }
  return res.length === 0 ? -1 : res.join(" ")
}
console.log(foo(line))
// var line = '1 22 22 33 22 12 45 44 5'

// function foo(line) {
//   let arr = line.split(" ").map(item => Number(item))
//   let len = arr.length
//   let res = []
//   if (len <= 1) return -1
//   for (let i = 1; i < len; i++) {
//     let temp = arr.slice(0, i)
//     let ins = temp.filter(item => item > arr[i]).length
//     if (ins === 1) {
//       res.push(i)
//     }
//   }
//     return res.length === 0 ? -1 : res.join(" ")
// }
// 输入：s = "lee(t(c)o)de)"
// 输出："lee(t(c)o)de"
// 解释："lee(t(co)de)" , "lee(t(c)ode)" 也是一个可行答案。


let s = "lee(t(c)o)de)"

function minRemoveToMakeValid(s) {
  if (typeof s !== "string") throw ("Not a string")
  let res = [],
    makePos = [],
    makeNum = 0,
    len = s.length
  for (let i = 0; i < s; i++) {
    if (s[i] === "(") {
      res.push(s[i])
    } else if (s[i] === ")") {
      res.push(s[i])
    } else {
      res.push(s[i])
    }
  }
}
console.log(minRemoveToMakeValid(s))
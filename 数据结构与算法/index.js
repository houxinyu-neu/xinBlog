let oldLine = "ATTTAA"
let newLine = "TTAATT"

function getNum(oldLine, newLine) {
  let str1 = oldLine + "",
    str2 = newLine + ""
  const n = str1.length,
    m = str2.length
  if (m * n === 0) return 0
  let dp = Array.from(new Array(n), () => new Array(m))
  for (let i = 0; i < n; i++) {
    dp[i][0] = i + 1
  }
  for (let j = 0; j < m; j++) {
    dp[0][j] = j + 1
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (str1[i] === str2[j]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1
      }
    }
  }
  let tNum = 0,
    aNum = 0
  for (let i of oldLine) {
    if (i === "A") {
      aNum++
    }
    if (i === "T") {
      tNum++
    }
  }
  let min = Math.min(aNum, tNum)
  return min % 2 === 0 ? dp[n - 1][m - 1] - min / 2 : dp[n - 1][m - 1] - min + 1
}
console.log(getNum(oldLine, newLine))
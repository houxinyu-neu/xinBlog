function sum(a) {
  return (b) => {
    return (c) => {
      return a * b * c
    }
  }
}
console.log(sum(1, 2, 3).valueOf())

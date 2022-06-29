export default function miniMaxSum (arr: number[]): number[] {
  const sortedArr = arr.sort((a, b) => Math.sign(a - b))
  const firstFour = sortedArr.slice(0, 4)
  const lastFour = sortedArr.slice(1, 5)

  return [
    firstFour.reduce(getSum),
    lastFour.reduce(getSum)
  ]
}

function getSum (total: number, num: number): number {
  return total + num
}

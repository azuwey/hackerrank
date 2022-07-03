export default function findTheMedian (arr: number[]): number {
  const sortedArr = arr.sort((a, b) => Math.sign(a - b))
  return sortedArr[Math.round((sortedArr.length - 1) / 2)]
}

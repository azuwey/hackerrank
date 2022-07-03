export default function diagonalDifference (arr: number[][]): number {
  let leftToRightDiagonal = 0
  let rightToLeftDiagonal = 0

  for (let i = 0; i < arr.length; ++i) {
    leftToRightDiagonal += arr[i][i]
    rightToLeftDiagonal += arr[i][arr.length - 1 - i]
  }

  return Math.abs(leftToRightDiagonal - rightToLeftDiagonal)
}

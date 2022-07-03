export default function FlippingTheMatrix (matrix: number[][]): number {
  const n = matrix.length / 2
  let quadrantSum = 0

  for (let column = 0; column < n; ++column) {
    for (let row = 0; row < n; ++row) {
      quadrantSum += Math.max(
        matrix[row][column], matrix[row][matrix.length - column - 1],
        matrix[matrix.length - row - 1][column], matrix[matrix.length - row - 1][matrix.length - column - 1]
      )
    }
  }

  return quadrantSum
}

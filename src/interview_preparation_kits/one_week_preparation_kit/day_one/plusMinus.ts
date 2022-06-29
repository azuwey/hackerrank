export default function plusMinus (arr: number[]): string[] {
  let numberOfPositives = 0
  let numberOfNegatives = 0
  let numberOfZeros = 0

  for (const value of arr) {
    if (value > 0) {
      ++numberOfPositives
    } else if (value < 0) {
      ++numberOfNegatives
    } else {
      ++numberOfZeros
    }
  }

  return [
    (numberOfPositives / arr.length).toFixed(6),
    (numberOfNegatives / arr.length).toFixed(6),
    (numberOfZeros / arr.length).toFixed(6)
  ]
}

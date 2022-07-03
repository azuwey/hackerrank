export default function countingSort (arr: number[]): number[] {
  let frequency: number[] = new Array(100).fill(0)

  for (const value of arr) {
    if (frequency.length - 1 < value) {
      frequency = frequency.concat(new Array(value - frequency.length + 1).fill(0))
    }

    frequency[value] += 1
  }

  return frequency
}

export default function lonelyInteger (arr: number[]): number {
  const integerCounts: {[key: number]: number} = {}

  for (const element of arr) {
    if (integerCounts[element] !== undefined) {
      integerCounts[element] += 1
    } else {
      integerCounts[element] = 1
    }
  }

  return Number(Object.keys(integerCounts).find((key) => {
    return integerCounts[key as unknown as number] === 1
  }))
}

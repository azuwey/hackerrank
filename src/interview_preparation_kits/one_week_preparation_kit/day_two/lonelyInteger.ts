export default function lonelyInteger (arr: number[]): number {
    let integerCounts: {[key: number]: number} = {}

    for (let element of arr) {
        if (integerCounts[element]) {
            integerCounts[element] += 1
        } else {
            integerCounts[element] = 1
        }
    }

    return Number(Object.keys(integerCounts).find((key) => {
        return integerCounts[key as unknown as number] === 1
    }))
}
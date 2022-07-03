import lonelyInteger from './lonelyInteger'

describe('Lonely Integer', () => {
    test('Finds the unique element in the [1, 2, 3, 4, 3, 2, 1] array and returns the number 4', () => {
        expect(lonelyInteger([1, 2, 3, 4, 3, 2, 1])).toBe(4)
    })

    test('Finds the unique element in the [1] array and returns the number 1', () => {
        expect(lonelyInteger([1])).toBe(1)
    })

    test('Finds the unique element in the [1, 1, 2] array and returns the number 2', () => {
        expect(lonelyInteger([1, 1, 2])).toBe(2)
    })

    test('Finds the unique element in the [0 0 1 2 1] array and returns the number 2', () => {
        expect(lonelyInteger([0, 0, 1, 2, 1])).toBe(2)
    })
})

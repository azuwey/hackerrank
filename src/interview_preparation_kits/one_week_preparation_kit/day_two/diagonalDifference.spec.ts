import diagonalDifference from './diagonalDifference'

describe('Diagonal Difference', () => {
    test('Calculates the diagonal difference from [[1, 2, 3], [4, 5, 6], [9, 8, 9]] returns the number 2', () => {
        expect(diagonalDifference([[1, 2, 3], [4, 5, 6], [9, 8, 9]])).toBe(2)
    })

    test('Calculates the diagonal difference from [[11, 2, 4], [4, 5, 6], [10, 8, -12]] returns the number 15', () => {
        expect(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]])).toBe(15)
    })
})

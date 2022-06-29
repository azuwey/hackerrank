import miniMaxSum from './miniMaxSum'

describe('Mini-Max Sum', () => {
  test('Calculates the minimum and the maximum sum for [1, 2, 3, 4, 5] and returns [10, 14]', () => {
    expect(miniMaxSum([1, 2, 3, 4, 5])).toStrictEqual([10, 14])
  })

  test('Calculates the minimum and the maximum sum for [7, 69, 2, 221, 8974] and returns [299, 9271]', () => {
    expect(miniMaxSum([7, 69, 2, 221, 8974])).toStrictEqual([299, 9271])
  })

  test('Calculates the minimum and the maximum sum for [NaN, 69, 2, 221, 8974] and returns [NaN, 9271]', () => {
    expect(miniMaxSum([NaN, 69, 2, 221, 8974])).toStrictEqual([NaN, 9266])
  })
})

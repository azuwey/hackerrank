import plusMinus from './plusMinus'

describe('Plus Minus', () => {
  test('Calculates the ratios for [1, 1, 0, -1, -1] and returns [\'0.400000\', \'0.400000\', \'0.200000\']', () => {
    expect(plusMinus([1, 1, 0, -1, -1])).toStrictEqual(['0.400000', '0.400000', '0.200000'])
  })

  test('Calculates the ratios for [1, 2, 3, -1, -2, -3, 0, 0] and returns [\'0.375000\', \'0.375000\', \'0.250000\']', () => {
    expect(plusMinus([1, 1, 0, -1, -1])).toStrictEqual(['0.400000', '0.400000', '0.200000'])
  })

  test('Calculates the ratios for [0, 0, 0, 0] and returns [\'0.000000\', \'0.000000\', \'1.000000\']', () => {
    expect(plusMinus([0, 0, 0, 0])).toStrictEqual(['0.000000', '0.000000', '1.000000'])
  })

  test('Calculates the ratios for [-1, 0, -1, 0] and returns [\'0.000000\', \'0.000000\', \'1.000000\']', () => {
    expect(plusMinus([-1, 0, -1, 0])).toStrictEqual(['0.000000', '0.500000', '0.500000'])
  })
})

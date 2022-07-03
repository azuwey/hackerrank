# Flipping the Matrix

## Problem

Sean invented a game involving a matrix where each cell of the matrix contains an integer. He can reverse any of its
rows or columns any number of times. The goal of the game is to maximize the sum of the elements in the submatrix
located in the upper-left quadrant of the matrix.

Given the initial configurations for `q` matrices, help Sean reverse the rows and columns of each matrix in the best
possible way so that the sum of the elements in the matrix's upper-left quadrant is maximal.

## Example

```typescript
let matrix = [[1, 2], [3, 4]]
```

```text
1 2
3 4
```

It is `2 x 2` and we want to maximize the top left quadrant, a `1 x 1` matrix. Reverse row `1`:

```text
1 2
4 3
```

And now reverse column `0`:

```text
4 2
1 3
```

The maximal sum is `4`.

## Constraints

- `1 <= q <= 16`
- `1 <= number of elements <= 128`
- `0 <= matrix[i][j] <= 4096`, where `0 <= i,j < 2n`
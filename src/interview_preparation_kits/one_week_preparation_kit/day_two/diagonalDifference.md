# Diagonal Difference

## Problem

Given a square matrix, calculate the absolute difference between the sums of its diagonals. Return that absolute
difference.

## Example

For example, the square matrix `arr` is shown below:

```typescript
const arr = [
    1, 2, 3,
    4, 5, 6,
    9, 8, 9
]
```

The left-to-right diagonal is `1 + 5 + 9 = 15` and the right-to-left diagonal is `3 + 5 + 9 = 17`  Their absolute
difference is `|15 - 17| = 2`.

## Constraints

- `-100 <= arr[i][j] <= 100`

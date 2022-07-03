# Mini-Max Sum

## Problem

Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the
five integers. Then returns the respective minimum and maximum values as an array integers in the following order:

1. Minimum
2. Maximum

## Example

```typescript
let arr: number[] = [1, 3, 5, 7, 9]
```

The minimum sum is `1 + 3 + 5 + 7 = 16` and the maximum sum is `3 + 5 + 7 + 9 = 24` The function returns:

```typescript
[16, 24]
```

## Constraints

- `1 <= arr[i] <= 10^9`

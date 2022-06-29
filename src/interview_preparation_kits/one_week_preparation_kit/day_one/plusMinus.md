# Plus Minus

## Problem

Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Return the
decimal value of each fraction in an array with `6` places after the decimal and in the following order:

1. Proportion of positive values
2. Proportion of negative values 
3. Proportion of zeros

## Example

```typescript
let arr: number[] = [1, 1, 0, -1, -1]
```

There are `5` elements, two positive, two negative and one zero. Their ratios are `2/5 = 0.400000`, `2/5 = 0.400000` and
`1/5 = 0.200000`. Results are returned as:

```typescript
['0.400000', '0.400000', '0.200000']
```


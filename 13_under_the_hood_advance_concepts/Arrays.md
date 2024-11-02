# Arrays from JS engine side

In JavaScript, arrays can be either continuous (dense) or holey (sparse), which affects how efficiently JavaScript engines like V8 optimize them.

## 1. Continuous (dense) Arrays

- Continuous arrays have no gaps between indices; each index from 0 up to the array’s length has a defined value.

- Example:

```javascript
const denseArray = [1, 2, 3, 4, 5]; // Indices 0 through 4 are filled
```

### How they work :

- javascript engines can optimize dense arrays more efficiently because all elements are contiguous. Operations like iterating over elements are faster due to this continuous structure.

## 2. Holey (Sparse) Arrays

- Holey arrays have gaps (undefined or empty spots) between indices. This happens when elements are missing or deleted from an array.

- Example:

```javascript
const sparseArray = [1, , 3, , 5]; // Missing values at indices 1 and 3
```

- Alternatively, you can create a holey array by explicitly setting elements to be undefined or by deleting an element.

### How they work :

- Javascript engines treat holey arrays differently, often switching from optimized storage , to a more general Object-like storage. This can make operations on holey arrays slower, as the engine has to handle the missing elements.

## Types of Continuous(dense) and Holey(sparse) Arrays

### 1. SMI (small integer)

- SMI stands for "Small integer". In Javascript , SMI is an integer that falls within a range that can be represented by a fixed, small number of bits(usually 31 on a 32-bit OS and 32 on a 64-bit OS).

- SMIs allow JavaScript engines to handle numbers as raw integers without the overhead of full JavaScript Number objects, which generally occupy 64 bits. This is more efficient in terms of both memory and performance.

- Example:

```javascript
let num = 42; // This is treated as an SMI if it fits within the integer range
```

- Operations on SMIs are faster and consume less memory compared to full floating-point representations, which the JavaScript Number type generally uses.

### 2. Double (floating point) Arrays

- A double array in V8 is an array where all elements are represented as 64-bit floating-point numbers (doubles), regardless of whether they are integers or floating-point values.

- Example:

```javascript
const doubleArray = [1.1, 2.5, 3.0]; // V8 treats all values as 64-bit doubles
```

- Since JavaScript’s Number type represents both integers and floating-point numbers as 64-bit doubles (per IEEE-754 standard), V8 often uses double arrays when elements are or could be non-integer numbers.

- Enables consistent handling of all numeric values in arrays when mixed types are possible. However, it requires more memory than SMIs or packed arrays of pure integers.

### Packed Arrays

- A packed array in V8 is an array with contiguous elements (no holes). Each element is stored directly next to the previous one in memory.

- Example:

```javascript
const packedArray = [1, 2, 3, 4, 5]; // No gaps between indices
```

- Packed arrays are more memory-efficient and faster to access because the engine can iterate over them without checking for empty (holey) slots. They are treated as dense arrays.

- V8 can use optimized storage for packed arrays, making operations like iteration and access faster.

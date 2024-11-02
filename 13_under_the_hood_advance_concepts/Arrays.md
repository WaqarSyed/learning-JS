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

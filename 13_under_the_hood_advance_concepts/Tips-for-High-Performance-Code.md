# Sample Tips for High-Performance Code

## Use Consistent Types

- Avoid mixing types in arrays and avoid changing an object’s shape.

## Minimize Garbage

- Reuse objects or use pooling in critical sections.

## Leverage Typed Arrays

- When working with large data sets or binary data.

## Use Monomorphic Property Access

- Access the same properties on the same types of objects for better inlining and JIT optimization.

## Break Down Long Functions

- Shorter, stable functions are more likely to be inlined and optimized.

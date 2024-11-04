# Property Access Optimization

## Monomorphic, Polymorphic, and Megamorphic Property Access

- When JavaScript accesses a property, the engine optimizes access based on the number of object types (hidden classes) it encounters:

### Monomorphic Access

- Accessing the same property on the same type of object.

### Polymorphic Access

- Accessing the same property on a few different types of objects.

### Megamorphic Access

- Accessing the same property on many different types of objects.

#### Monomorphic access is the fastest and most optimized by the JIT compiler.

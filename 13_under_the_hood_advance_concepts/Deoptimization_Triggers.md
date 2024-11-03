# Deoptimization Triggers

- Deoptimization occurs when JIT-optimized code encounters unexpected patterns and must fall back to less efficient code.

## Common Triggers :

- Modifying the structure of objects after creation, such as adding or deleting properties.

- Mixing data types within an array.

- Using try/catch blocks, as they may disable certain optimizations.

### Optimization Tip :

- Avoid these patterns in performance-critical code to reduce deoptimization risks.

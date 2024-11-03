# Just In Time (JIT) Compilation

- JavaScript engines use JIT compilation to compile frequently run code at runtime, optimizing it on the fly.

## Optimization Stages

- V8, for example, has multiple JIT stages—interpreted, baseline compiled, and optimized compiled code. Code that is run frequently is recompiled and optimized further.

### Optimization Tip :

- Avoid changing the types of variables often, as JIT compilers prefer predictable, stable code. This is known as “type stability” and can result in more efficient execution.

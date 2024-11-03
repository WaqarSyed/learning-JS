# Garbage Collection (GC) Mechanisms

- Most JavaScript engines, including V8, use a generational garbage collector that separates memory into young and old generations. Short lived objects are stored in young generation and cleaned up quickly, while long-lived objects are moved to the old generation.

## Mark-and-Sweep Algorithm

- V8 uses this algorithm for the old generation, where it marks reachable objects and sweeps away the unreachable ones. This process can cause "stop-the-world" pauses.

### Optimization Tip :

- Avoid creatin large numbers of temporary objects within loops, as they can increase the GC workload. Use object pooling for frequently created objects when possible.

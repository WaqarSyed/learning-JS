# Event Loop Phases and Microtasks vs. Macrotasks

- Macrotasks (like setTimeout, setInterval) are queued in the task queue, while microtasks (like Promise.then, process.nextTick) are queued in the microtask queue.

- After executing all code in the call stack, the event loop first empties the microtask queue before moving on to the macrotask queue.

### Optimization Tip :

- Use microtasks(e.g. Promise.then()) for lightweight asynchronous operations you need to complete as soon as possible, such as sequential async operations.

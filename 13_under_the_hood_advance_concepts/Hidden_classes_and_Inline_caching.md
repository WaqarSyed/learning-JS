# Hidden Classes and Inline Caching

## Hidden Classes :

- JavaScript objects are inherently dynamic, but engines optimize by creating hidden classes (internal templates) to speed up property access. When you add properties to an object in a consistent order, engines like V8 can optimize by generating a shared hidden class for similar objects. However, adding properties in different orders can disrupt this optimization.

## Inline Caching :

- This is a technique used to optimize repeated property access. When a property is accessed multiple times on the same type of object, V8 creates an inline cache, essentially a "shortcut" that directly links the object’s hidden class to the property location, reducing the lookup time.

### Example :

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);
```

- Here, both person1 and person2 share the same hidden class due to consistent object shape, which speeds up property access.

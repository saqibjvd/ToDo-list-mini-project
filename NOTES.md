# Event handling in React
* for a child component to affect the parent component, you have to give the child a function that calls a function.
* this is because you do not want to actually call the function yet, you are saving that function for e.g. a click
* and then the parameter has to reference which child to affect, for example in the following code, the `index` in `clickHandler(index)` is remember for later even though it goes out of scope

```js
todos.map((todo, index) => <Todo
    key={todo.id}
    todo={todo}
    onClick={(e) => clickHandler(index)}
/>)
```

# Tailwind
* the philosophy of normal CSS is that you can give your classes names with *semantic meaning*
* but in practice, coming up with names is hard and you end up with loads of classes and lose track of them
* so in tailwind, all the classes are already there for you and you just pick the one(s) that you like
* responsive design is also a lot easier because you can use `md:` or `lg:` prefixes and it does all the media queries for you
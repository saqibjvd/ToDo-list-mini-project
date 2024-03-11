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


# Next.js
## Frontend
* think of `app` folder as hostname e.g. `localhost:3000` 
* think of other folders as the path e.g. the first below is replaced to the second:
```
localhost:3000/jonathan/todo
           app/jonathan/todo/page.js
              ^^^^^^^^^^^^^^
               this all matches
```
## Backend
* `page.js` is React
* `route.js` is Node
* they use the same folder structure
* NOTE: `route.js` takes priority over `page.js`
  * so if you have both in a folder, your React will not get rendered
* e.g. inside `app/jonathan/todo/route.js`, define a
```js
export function GET(req) {
  return Response.json("hello");
}
```
* is the same as express.js inside the file you run with `node`
```js
const app = express();
app.get('/jonathan/todo', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify("Jonathan"));
});
```
* remember that typing in a URL in your browser is the same as a GET
* it is good practice to put all of your `route.js` under an `app/api` subfolder


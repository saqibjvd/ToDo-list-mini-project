const database = require('./database');

export async function GET() {
    console.log(database.array);

    database.addToEveryElement(10);
    console.log(database.array);

    database.removeLastElement();
    console.log(database.array);

    database.removeFirstElement();
    console.log(database.array);

    database.array.shift();
    console.log(database.array);

    database.customFilter((num) => num % 2 === 0);
    console.log(database.array);

    return Response.json("success");
}
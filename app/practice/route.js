const randomModule = require('./myRandomModule');

export async function GET(request) {
    console.log(foo);
    return Response.json(randomModule.randomArray);
}
export async function DELETE(request) {
    let {id} = await request.json();
    randomModule.deleteFromArray(id);
    return Response.json(randomModule.randomArray);
}
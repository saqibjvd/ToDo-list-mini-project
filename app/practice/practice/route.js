var randomModule = require('../myRandomModule');

export async function GET(request) {
    return Response.json(randomModule.randomArray);
}
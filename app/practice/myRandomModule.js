export let randomArray = [1,2,3,4,5]

export function deleteFromArray(id) {
    randomArray = randomArray.filter(
        (item) => item !== id
    );
}
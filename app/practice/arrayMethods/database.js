export let array = [2,3,4,5,6];

export const addToEveryElement = (toAdd) => {
    array = array.map((num) => toAdd + num);
}
export const removeLastElement = () => {
    // array = array.filter((item, index) => index === array.length - 1)
    array.pop();
}
export const removeFirstElement = () => {
    array.shift();
}
export const customFilter = (condition) => {
    // array = array.filter((num) => num % 2 === 0);
    array = array.filter(condition);
}
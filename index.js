// Code your solution here

function findMatching(array, string) {
    let result = array.filter(item => item.toLowerCase() === string.toLowerCase());
    return result;
};

function fuzzyMatch(array, string) {
    let result = array.filter(item => item.toLowerCase().startsWith(string.toLowerCase()));
    return result;
}

function matchName(array, string) {
    let result = array.filter(item => item.name === string);
    return result;
}
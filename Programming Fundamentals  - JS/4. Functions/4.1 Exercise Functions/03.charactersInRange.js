function solve(char1, char2){

    let startChar = Math.min(char1.charCodeAt(), char2.charCodeAt());
    let endChar = Math.max(char1.charCodeAt(), char2.charCodeAt());

    let charArray = [];

    for (let currentChar = startChar +1; currentChar < endChar; currentChar++) {
        charArray.push(String.fromCharCode(currentChar))
    }
    console.log(charArray.join(' '));
}
solve('a','d');
console.log("------------------------------------");
solve('#',':');
console.log("------------------------------------");
solve('C','#');
// Link do desafio => https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    // Write your code here
    let arr = new Array(n).fill(" ")
    for(let i = n-1; i >= 0; i--){
        arr[i] = "#"
        
        console.log(arr.join(""))
    }
    return 0
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}

//Link do desafio => https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true

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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
        let min = arr[0];
        let max = min;
        let sumMax = 0;
        let sumMin = sumMax;
       
        
    for(let i = 0; i<arr.length; i++){
        if(min > arr[i]){
            min = arr[i]
        }else if(max < arr[i]){
            max = arr[i]
        }
         sumMax += arr[i]
         sumMin += arr[i]
    }
        sumMax = sumMax - min
        sumMin = sumMin - max
        console.log(sumMin, sumMax)
    return 0
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}

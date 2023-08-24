/**
 * https://www.acmicpc.net/problem/11653
 */

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(N) {
  if (N === 1) {
    return;
  }
  while (N % 2 === 0) {
    console.log(2);
    N /= 2;
  }
  for (let i = 3; i <= N; i += 2) {
    if (N === 1) {
      return;
    }
    while (N % i === 0) {
      console.log(i);
      N /= i;
    }
  }
}

let N = input[0];
solution(N);

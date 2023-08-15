/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/87390
 */

function solution(n, left, right) {
  let answer = [];
  for (let i = left; i <= right; i++) {
    answer.push(Math.max(Math.floor(i / n), i % n) + 1);
  }
  return answer;
}

/*
n = 4 일 때 i / n
0 / 4 = 0 ... 0 -> 1
1 / 4 = 0 ... 1 -> 2
2 / 4 = 0 ... 2 -> 3
3 / 4 = 0 ... 3 -> 4
4 / 4 = 1 ... 0 -> 2
5 / 4 = 1 ... 1 -> 2
6 / 4 = 1 ... 2 -> 3
7 / 4 = 1 ... 3 -> 4
8 / 4 = 2 ... 0 -> 3
*/

// function solution(n, left, right) {
//     var answer = [];
//     for (let i = 1; i <= n; i++) {
//         for (let j = i; j > 1; j--) {
//             answer.push(i);
//         }
//         for (let k = i; k <= n; k++) {
//             answer.push(k);
//         }
//     }
//     return answer.slice(left, right + 1);
// }

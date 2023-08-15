/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12980
 */

function solution(n) {
  let count = 1;
  while (n !== 1) {
    if (n % 2 === 1) {
      n -= 1;
      count++;
    }
    n /= 2;
  }
  return count;
}

// 6 -> 3 ->(count++) 2 -> 1(count++)
// 5 ->(count++) 4 -> 2 -> 1(count++)

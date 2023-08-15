/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/87389
 */

function solution(n) {
  let answer = 2;

  while (1) {
    if ((n - 1) % answer === 0) {
      break;
    }
    answer++;
  }

  return answer;
}

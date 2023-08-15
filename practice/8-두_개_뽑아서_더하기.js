/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/68644
 */

function solution(numbers) {
  var answer = [];
  const len = numbers.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (i === j) {
        continue;
      }
      const result = numbers[i] + numbers[j];
      if (!answer.includes(result)) {
        answer.push(result);
      }
    }
  }
  answer.sort(function (a, b) {
    return a - b;
  });
  return answer;
}

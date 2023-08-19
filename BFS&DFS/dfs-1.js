/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/43165
 */

function solution(numbers, target) {
  var answer = 0;

  const result = [];
  recur(0, 0, numbers, result);

  result.map(data => {
    if (data === target) {
      answer++;
    }
  });
  return answer;
}

function recur(sum, i, array, result) {
  if (i === array.length - 1) {
    result.push(sum + array[i]);
    result.push(sum - array[i]);
    return;
  }

  recur(sum + array[i], i + 1, array, result);
  recur(sum - array[i], i + 1, array, result);
}

/*
재귀 사용
종료 조건: array의 마지막 인덱스에 도달
하나는 더하고, 하나는 빼는걸로 재귀 호출
*/

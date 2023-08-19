/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42746
 */

function solution(numbers) {
  const strings = numbers.map(String).sort((a, b) => b + a - (a + b));
  const result = strings.join('');

  return result.startsWith('0') ? '0' : result;
}

// number 배열을 string 으로 바꾸고
// 인접한 문자열끼리 더했을 때 더 큰게 앞에 오도록 정렬

/*
아래 코드는 버블 소트를 직접 구현한 것, 성능 면에서 효율적이지 않음.
시간 초과

function solution(numbers) {
  numbers.sort().reverse();
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - 1; j++) {
      const a = String(numbers[j]);
      const b = String(numbers[j + 1])
      if (a + b < b + a) {
        const temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }
  let result = numbers.join("");
  result = result.startsWith("0") ? "0" : result;
  return result;
}
*/

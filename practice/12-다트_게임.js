/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/17682
 */

function solution(dartResult) {
  var answer = 0;

  let tempResult = [];
  let tempStart = 0;
  for (let i = 0; i < dartResult.length; i++) {
    if (['S', 'D', 'T'].includes(dartResult[i])) {
      let number = Number(dartResult.substring(tempStart, i));
      if (dartResult[i] === 'D') {
        number = number ** 2;
      } else if (dartResult[i] === 'T') {
        number = number ** 3;
      }
      tempStart = i + 2;
      if (dartResult[i + 1] === '*') {
        if (tempResult[tempResult.length - 1]) {
          tempResult[tempResult.length - 1] *= 2;
        }
        tempResult.push(number * 2);
      } else if (dartResult[i + 1] === '#') {
        tempResult.push(number * -1);
      } else {
        tempResult.push(number);
        tempStart = i + 1;
      }
    }
  }

  tempResult.map(temp => {
    answer += temp;
  });
  return answer;
}

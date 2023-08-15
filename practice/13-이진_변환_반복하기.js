/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/70129
 */

function solution(s) {
  let transCount = 0;
  let deletedZeroCount = 0;

  while (s !== '1') {
    const split = s.split(0);
    deletedZeroCount += split.length - 1;
    s = split.join('').length.toString(2);
    transCount++;
  }
  var answer = [transCount, deletedZeroCount];

  return answer;
}

/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12973
 */

function solution(s) {
  const stack = [];
  let i = 1;
  while (s.length !== 0) {
    stack.push(s[0]);
    const len = stack.length;
    if (stack[len - 1] === stack[len - 2]) {
      stack.pop();
      stack.pop();
    }
    s = s.slice(i);
  }
  if (stack.length === 0) {
    return 1;
  } else {
    return 0;
  }
}

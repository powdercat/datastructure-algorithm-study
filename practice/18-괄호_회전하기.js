/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/76502
 */

function solution(s) {
  var answer = 0;

  const len = s.length;
  for (let i = 0; i < len; i++) {
    const stack = [];
    const string = s.slice(i) + s.slice(0, i);
    for (let j = 0; j < len; j++) {
      set(stack, string[j]);
    }
    if (stack.length === 0) {
      answer++;
    }
  }
  return answer;
}

function set(stack, data) {
  let delta = 0;
  if (stack.length > 0) {
    const nowAscii = data.charCodeAt([0]);
    const lastAscii = stack[stack.length - 1].charCodeAt([0]);
    delta = nowAscii - lastAscii;
  }
  if (delta === 1 || delta === 2) {
    stack.pop();
  } else {
    stack.push(data);
  }
}

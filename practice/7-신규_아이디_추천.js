/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/72410
 */

function solution(new_id) {
  let answer = '';

  for (let i = 0; i < new_id.length; i++) {
    let text = new_id[i];
    const asciiCode = new_id.charCodeAt(i);
    if (asciiCode >= 65 && asciiCode <= 90) {
      text = String.fromCharCode(asciiCode + 32);
    } else if (
      typeof text !== 'number' &&
      !['-', '_', '.'].includes(text) &&
      !((asciiCode >= 48 && asciiCode <= 57) || (asciiCode >= 97 && asciiCode <= 122))
    ) {
      continue;
    }
    answer += text;
  }
  for (let i = 0; i < answer.length - 1; i++) {
    if (answer[i] === '.' && answer[i] === answer[i + 1]) {
      answer = answer.slice(0, i) + '%' + answer.slice(i + 1);
    }
  }
  answer = answer.split('%').join('');
  if (answer.startsWith('.')) {
    answer = answer.slice(1);
  }
  if (answer.endsWith('.')) {
    answer = answer.slice(0, answer.length - 1);
  }
  if (answer.length === 0) {
    answer = 'a';
  } else if (answer.length >= 16) {
    answer = answer.slice(0, 15).endsWith('.') ? answer.slice(0, 14) : answer.slice(0, 15);
  }
  if (answer.length <= 2) {
    for (let i = 0; i <= 3 - answer.length; i++) {
      answer += answer[answer.length - 1];
    }
  }

  return answer;
}

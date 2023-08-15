/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/81301
 */

function solution(s) {
  let answer = '';

  if (!isNaN(Number(s))) {
    return Number(s);
  }

  while (s.length > 0) {
    console.log(s);
    const charAsNumber = Number(s[0]);
    if (!isNaN(charAsNumber)) {
      answer += charAsNumber;
      s = s.substr(1);
      continue;
    }
    switch (s.substr(0, 3)) {
      case 'zer':
        answer += '0';
        s = s.substr(4);
        break;
      case 'one':
        answer += '1';
        s = s.substr(3);
        break;
      case 'two':
        answer += '2';
        s = s.substr(3);
        break;
      case 'thr':
        answer += '3';
        s = s.substr(5);
        break;
      case 'fou':
        answer += '4';
        s = s.substr(4);
        break;
      case 'fiv':
        answer += '5';
        s = s.substr(4);
        break;
      case 'six':
        answer += '6';
        s = s.substr(3);
        break;
      case 'sev':
        answer += '7';
        s = s.substr(5);
        break;
      case 'eig':
        answer += '8';
        s = s.substr(5);
        break;
      case 'nin':
        answer += '9';
        s = s.substr(4);
        break;
    }
  }

  return Number(answer);
}

/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/64065
 */

function solution(s) {
  var answer = [];
  const replaceString = s.replaceAll('{', '').replaceAll('}', '');

  const map = new Map();
  replaceString.split(',').map(str => {
    const num = Number(str);
    map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1);
  });

  const sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

  for (const [key, value] of sortedMap) {
    answer.push(key);
  }

  return answer;
}

/*
문자 다 제거해서
맵에 갯수 value 로 넣기
많은 순으로 정렬
*/

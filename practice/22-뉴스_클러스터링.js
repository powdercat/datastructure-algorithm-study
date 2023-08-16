/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/17677
 */

function solution(str1, str2) {
  var answer = 0;

  const regex = /^[a-z|A-Z]+$/;
  const array1 = [];

  const union = [];
  const intersection = [];

  for (let i = 0; i < str1.length - 1; i++) {
    const str = str1.slice(i, i + 2);
    if (regex.test(str)) {
      const strr = str.toLowerCase();
      array1.push(strr);
      union.push(strr);
    }
  }
  for (let i = 0; i < str2.length - 1; i++) {
    const str = str2.slice(i, i + 2);
    if (regex.test(str)) {
      const strr = str.toLowerCase();
      const index = array1.indexOf(strr);
      if (index === -1) {
        union.push(strr);
      } else {
        intersection.push(strr);
        array1.splice(index, 1);
      }
    }
  }

  const intersectionLen = intersection.length;
  const unionLen = union.length;
  if (intersectionLen === 0 && unionLen === 0) {
    answer = 1;
  } else {
    answer = intersectionLen / unionLen;
  }
  return Math.floor(answer * 65536);
}
/*
유효한 쌍인지 확인해서 array 에 담는다
교집합 = b[i]가 a 에 있다면 push & a에서 삭제
합집합 = a 전부 push, b[i] 가 a 에 없다면 push
*/

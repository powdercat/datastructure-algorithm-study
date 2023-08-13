/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42578
 */

function solution(clothes) {
  var answer = 0;
  const obj = {};
  clothes.map(cloth => {
    if (obj[cloth[1]]) {
      obj[cloth[1]] += 1;
    } else {
      obj[cloth[1]] = 1;
    }
  });

  return Object.values(obj).reduce((acc, cur) => acc * (cur + 1), 1) - 1;
}

/**
 * example
 * A 2개 (ㄱ, ㄴ)
 * B 2개 (ㄷ, ㄹ)
 * C 1개 (ㅁ)
 * (2 + 1) * (2 + 1) * (1 + 1) - 1
 *
 * A 선택할 수 있는 경우의 수 = 3개 (ㄱ, ㄴ, x)
 * B 선택할 수 있는 경우의 수 = 3개 (ㄷ, ㄹ, x)
 * C 선택할 수 있는 경우의 수 = 2개 (ㅁ, x)
 * 모두 x 가 되는 경우의 수 = 1개 제외
 */

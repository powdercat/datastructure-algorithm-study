/**
 * https://programmers.co.kr/learn/courses/30/lessons/1845
 */

function solution(nums) {
  let obj = {};
  nums.map(num => {
    obj[num] = true;
  });

  return Math.min(nums.length / 2, Object.keys(obj).length);
}

/**
 * 폰켓몬 종류를 key 값으로 하는 객체를 만든다. 그러면 중복이 제거된다.
 * 객체의 key 값의 개수가 폰켓몬 종류의 개수가 된다.
 * 박사님이 최대로 줄 수 있는 폰켓몬의 개수는 nums.length / 2 이다.
 * 둘 중 작은 값이 가질 수 있는 폰켓몬의 최대 종류의 개수가 된다.
 */

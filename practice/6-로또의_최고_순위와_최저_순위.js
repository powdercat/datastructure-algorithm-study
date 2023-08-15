/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/77484
 */

function solution(lottos, win_nums) {
  var answer = [];

  let matchCount = 0;
  let unknownCount = 0;
  for (const lotto of lottos) {
    if (lotto === 0) {
      unknownCount++;
      continue;
    }
    if (win_nums.includes(lotto)) {
      matchCount++;
    }
  }

  const lowestRank = 7 - (matchCount + unknownCount) === 7 ? 6 : 7 - (matchCount + unknownCount);
  const highestRank = 7 - matchCount === 7 ? 6 : 7 - matchCount;

  return [lowestRank, highestRank];
}

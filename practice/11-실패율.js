/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42889
 */

function solution(N, stages) {
  let temp = [];
  for (let i = 1; i <= N; i++) {
    let fail = 0;
    let challenge = 0;
    stages.forEach(stage => {
      if (stage >= i) {
        challenge++;
      }
      if (stage === i) {
        fail++;
      }
    });
    const failRate = challenge === 0 ? 0 : fail / challenge;
    temp.push([i, failRate]);
  }
  const result = temp
    .sort((a, b) => {
      if (a[1] > b[1]) {
        return -1;
      } else if (a[1] <= b[1]) {
        return 1;
      }
    })
    .map(tem => {
      return tem[0];
    });

  return result;
}

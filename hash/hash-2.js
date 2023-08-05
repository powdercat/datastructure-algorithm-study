/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42576
 */

function solution(participants, completions) {
  let obj = {};
  participants.map(participant => {
    obj[participant] ? (obj[participant] += 1) : (obj[participant] = 1);
  });
  completions.map(completion => {
    obj[completion] -= 1;
  });

  const keys = Object.keys(obj);
  const result = keys.find(key => obj[key] === 1);

  return result;
}

/**
 * 참가자명을 key, 명수를 value 로 하는 객체를 만든다.
 * 완주자명을 key 로 하여 참가자명의 명수를 1씩 빼준다.
 * 참가자명의 명수가 1인 key 를 찾아 반환한다.
 */

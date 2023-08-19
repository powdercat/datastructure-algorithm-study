/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/43162
 */

function solution(n, computers) {
  let answer = 0;
  const visited = [];

  function recursive(row) {
    visited.push(row);
    for (let j = 0; j < n; j++) {
      if (computers[row][j] === 1 && !visited.includes(j)) {
        recursive(j);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited.includes(i)) {
      recursive(i);
      answer++;
    }
  }
  return answer;
}

/*
1. 0~n까지 방문하지 않았다면 방문한다.
2. 해당 row 를 방문처리 한다.
3. (row, 0~n) 를 돌면서 연결되어 있고, 아직 방문하지 않았다면 2번~3번 반복
*/

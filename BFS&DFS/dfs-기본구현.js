/*
dfs 함수
    범위를 벗어났다면 즉시 종료 return false
    현재 좌표에 값이 있고, 아직 방문하지 않았다면
        방문처리 하고
        방문해야하는 좌표들 전부 호출
        dfs()
        dfs()
        ...
        return true
    return false

모든 좌표에 대하여 체크하기
    if dfs(i, j) = true
        count++;
*/

/**
 * https://www.acmicpc.net/problem/6186
 */

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [R, C] = input[0].split(' ').map(Number);

const grassArr = [];
for (let i = 0; i < R; i++) {
  grassArr.push(input[i + 1].split(''));
}

const visited = new Array(R).fill().map(() => new Array(C).fill(0));
let clumps = 0;

function dfs(row, column) {
  if (row >= R || column >= C) {
    return false;
  }
  if (grassArr[row][column] === '#' && !visited[row][column]) {
    visited[row][column] = 1;
    dfs(row + 1, column);
    dfs(row, column + 1);
    return true;
  }
  return false;
}

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    const result = dfs(i, j);
    if (result === true) {
      clumps++;
    }
  }
}

console.log(clumps);

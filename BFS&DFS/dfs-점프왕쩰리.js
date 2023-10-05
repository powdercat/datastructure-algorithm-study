/**
 * https://www.acmicpc.net/problem/16173
 */

/*
하나라도 먼저 최종 칸에 도달하는 순간 승리이기 때문에 dfs를 사용하겠다.
dfs - 스택 사용

시작 좌표를 스택에 넣는다.
스택이 빌 때까지 반복문 수행
    조건 맞는지 확인
        칸을 벗어났으면 스킵
        이미 방문한 좌표면 스킵
        현재 좌표의 값이 0이면 그 좌표로부터 더 이상 점프할 수 없기 때문에 스킵
    현재 좌표의 값이 -1이면 최종에 도달하여 승리, 반복문 종료
    현재 좌표 방문처리
    현재 좌표에서 오른쪽과 아래로 이동하는 좌표를 스택에 푸시
*/
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input[0] * 1;
const gameArr = [];
for (let i = 0; i < N; i++) {
    gameArr.push(input[i + 1].split(' ').map(Number));
}

const visited = new Array(N).fill().map(() => new Array(N).fill(0));
const stack = [[0, 0]];
let result = 'Hing';
while (stack.length > 0) {
    const [row, column] = stack.shift();
    if (row >= N || column >= N || visited[row][column]) {
        continue;
    }
    const value = gameArr[row][column];
    if (value === 0) {
        continue;
    }
    if (value === -1) {
        result = 'HaruHaru';
        break;
    }
    visited[row][column] = 1;
    stack.push([row + value, column], [row, column + value]);
}
console.log(result);

/**
 * https://www.acmicpc.net/problem/17198
 */

/*
시작점, 바위, 끝점 찾기
시작점에서 bfs-queue 시작
    dequeu -> 현재좌표 & 현재까지의 count
    현재 좌표가 범위를 벗어났거나, 이미 방문했거나, 돌이면 continue
    호수면 현재까지의 count - 1 출력(.의 갯수를 세는 것이기 때문에 1을 뺀다)
    방문처리

    상하좌우 좌표 queue에 담기
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let B;
const visited = new Array(10).fill().map(() => new Array(10).fill(0));
const farm = new Array(10).fill().map(() => new Array(10).fill(0));
for (let i = 0; i < 10; i++) {
    const rowArr = input[i].split('');
    const BIndex = rowArr.indexOf('B');
    const RIndex = rowArr.indexOf('R');
    const LIndex = rowArr.indexOf('L');
    if (BIndex !== -1) {
        B = [i, BIndex];
    }
    if (RIndex !== -1) {
        farm[i][RIndex] = -1;
    }
    if (LIndex !== -1) {
        farm[i][LIndex] = 1;
    }
}
const queue = [[...B, 0]];

while (queue.length > 0) {
    const [r, c, count] = queue.shift();
    if (r >= 10 || r < 0 || c >= 10 || c < 0) {
        continue;
    }
    if (visited[r][c] || farm[r][c] === -1) {
        continue;
    }
    if (farm[r][c] === 1) {
        console.log(count - 1);
        break;
    }
    visited[r][c] = 1;

    queue.push([r, c + 1, count + 1]);
    queue.push([r, c - 1, count + 1]);
    queue.push([r + 1, c, count + 1]);
    queue.push([r - 1, c, count + 1]);
}

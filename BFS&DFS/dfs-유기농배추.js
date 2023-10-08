/**
 * https://www.acmicpc.net/problem/1012
 */

/*
[모든 좌표를 돌면서 연결된 덩어리 갯수 세는 문제]

하나의 점이 1이면 인접한 1들을 한번에 모두 보기 위해 dfs-stack 사용

아래 과정을 테스트케이스 갯수 만큼 반복

farm 배열 만들기
방문여부를 담기 위한 배열 생성

0,0 ~ 마지막 좌표까지 포문수행
    값이 0이면 컨티뉴
    이미 방문했으면 컨티뉴

    현재 좌표 stack에 담고 반복문 시작
    stack이 빌때까지 반복문 수행 // 방문처리를 위한 행위
        stack에서 하나 꺼냄
        범위 벗어났으면 skip
        그 값이 0이면 skip
        이미 방문했으면 스킵
        해당 좌표 방문처리
        상하좌우 다 push
    count++;
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const gameOfNumber = input[0] * 1;
let line = 1;
for (let i = 0; i < gameOfNumber; i++) {
    const [M, N, K] = input[line].split(' ').map(Number);
    const farmArr = new Array(M).fill().map(() => new Array(N).fill(0));
    const visited = new Array(M).fill().map(() => new Array(N).fill(0));
    for (let j = 0; j < K; j++) {
        const [a, b] = input[j + line + 1].split(' ').map(Number);
        farmArr[a][b] = 1;
    }
    let result = 0;
    for (let l = 0; l < M; l++) {
        for (let m = 0; m < N; m++) {
            if (farmArr[l][m] === 0 || visited[l][m]) {
                continue;
            }
            const stack = [[l, m]];
            while (stack.length > 0) {
                const [r, c] = stack.pop();
                if (r >= M || r < 0 || c >= N || c < 0) {
                    continue;
                }
                if (farmArr[r][c] === 0 || visited[r][c]) {
                    continue;
                }
                visited[r][c] = 1;
                stack.push([r + 1, c], [r - 1, c], [r, c + 1], [r, c - 1]);
            }
            result++;
        }
    }
    console.log(result);

    line += K + 1;
}

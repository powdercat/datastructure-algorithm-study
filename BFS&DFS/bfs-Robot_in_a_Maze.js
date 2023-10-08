/**
 * https://www.acmicpc.net/problem/9311
 */

/*
퍼져나가면서 탐색하기 위해 bfs-stack사용

미로 배열 만들면서 시작좌표 확인
방문여부 확인을 위한 배열 생성

시작좌표 큐에 담기 + 여태까지 왔던 거리를 담기 위한 값도 추가
큐가 빌때까지 반복문 수행
    큐에서 꺼내기
    범위를 벗어났으면 스킵
    이미 방문한 좌표면 스킵
    G면 종료! 여태까지 왔던 거리 출력
    O가 아니면 스킵
    방문처리
    상하좌우 모두 큐에 넣기
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const numOfMaze = input[0] * 1;
let line = 1;
for (let i = 0; i < numOfMaze; i++) {
    const [R, C] = input[line].split(' ').map(Number);
    const visited = new Array(R).fill().map(() => new Array(C).fill(0));
    const maze = [];
    const queue = [];
    for (let j = 0; j < R; j++) {
        const rowArr = input[j + line + 1].split('');
        const temp = rowArr.indexOf('S');
        if (temp !== -1) {
            queue.push([j, temp, 0]);
        }
        maze.push(rowArr);
    }
    let result = 0;
    while (queue.length > 0) {
        const [r, c, count] = queue.shift();
        if (r >= R || r < 0 || c >= C || c < 0) {
            continue;
        }
        if (visited[r][c]) {
            continue;
        }
        console.log(r, c, R, C);
        if (maze[r][c] === 'G') {
            result = count;
            break;
        }
        if (maze[r][c] === 'X') {
            continue;
        }
        visited[r][c] = 1;
        queue.push([r, c + 1, count + 1], [r, c - 1, count + 1], [r + 1, c, count + 1], [r - 1, c, count + 1]);
    }
    result === 0 ? console.log('No Exit') : console.log('Shortest Path: ' + result);

    line += R + 1;
}

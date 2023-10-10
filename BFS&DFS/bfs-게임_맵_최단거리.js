/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/1844
 */
/*
최단경로 문제 = bfs
목적지를 찾자마자 최단경로임이 보장되어 탐색을 종료할 수 있음 (dfs보다 빠른 경우가 많음)

1. 기본
방문여부를 담기 위한 2차원 배열 선언
시작점을 큐에 담음 [0 ,0, 1] = [r, c, count]
큐가 빌 때까지 반복문 수행
    큐에서 하나 shift
    범위를 벗어났으면 컨티뉴
    이미 방문햇으면 컨티뉴
    벽이면 컨티뉴
    목적지 도달했을 경우 반복문 종료, count + 1 결과값
    방문처리
    상하좌우 좌표 넣기
-> 이 방법은 효율성 문제 발생

-> 방문여부 담는 배열 선언을 제거하고 기존의 map 을 수정하는 방식으로 변경

2. 최적화
시작점을 큐에 담음 [0 ,0, 1] = [r, c, count]
큐가 빌 때까지 반복문 수행
    큐에서 하나 shift
    범위를 벗어났으면 컨티뉴
    벽이면 컨티뉴
    목적지 도달했을 경우 반복문 종료, count + 1 결과값
    현재 좌표 벽 처리
    상하좌우 좌표 넣기
*/

function solution(maps) {
    const R = maps.length;
    const C = maps[0].length;

    // const visited = new Array(R).fill().map(() => new Array(C).fill(0));

    const queue = [[0, 0, 1]];

    let result = -1;
    while (queue.length > 0) {
        const [r, c, count] = queue.shift();
        if (r >= R || r < 0 || c >= C || c < 0) {
            continue;
        }
        // if (visited[r][c] === 1) {
        //     continue;
        // }
        if (maps[r][c] === 0) {
            continue;
        }
        if (r === R - 1 && c === C - 1) {
            result = count;
            break;
        }
        // visited[r][c] = 1;

        maps[r][c] = 0;
        queue.push([r, c + 1, count + 1], [r, c - 1, count + 1], [r + 1, c, count + 1], [r - 1, c, count + 1]);
    }
    return result;
}

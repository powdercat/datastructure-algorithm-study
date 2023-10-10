/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/43163
 */

/*
최단거리 = bfs

words 안에 target 없으면 바로 0 return

방문여부를 담기 위한 배열 선언 및 초기화

큐에 [begin, 0] 넣기
큐가 빌때까지 반복문 수행
    [value, count] = 큐에서 하나 꺼냄
    value가 타겟이면 count return

    words 안에 있는 것들 순회하면서
        이미 방문한 word면 컨티뉴
        딱 한 단어 차이나는 경우 큐에 푸시
        해당 word 방문 처리
*/
function solution(begin, target, words) {
    if (!words.includes(target)) {
        return 0;
    }

    const C = begin.length;
    const visited = new Array(words.length).fill(0);
    const queue = [[begin, 0]];

    let result = 0;
    while (queue.length > 0) {
        const [text, count] = queue.shift();
        if (text === target) {
            result = count;
            break;
        }

        for (const [i, word] of words.entries()) {
            if (visited[i] === 1) {
                continue;
            }

            let tmp = 0;
            for (let j = 0; j < C; j++) {
                if (word[j] !== text[j]) {
                    tmp++;
                }
            }
            if (tmp === 1) {
                queue.push([word, count + 1]);
                visited[i] = 1;
            }
        }
    }
    return result;
}

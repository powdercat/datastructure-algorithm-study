/*
https://www.acmicpc.net/problem/2606

1부터 bfs 탐색 시작

1과 연결된 애들을 큐에 넣는다.

탐색 시작
  큐가 비면 끝
  큐에서 하나 꺼냄
  방문하지 않았으면 result++, 방문처리, 연결된 애들 큐에 넣음 -> 다음 반복문
  방문했으면 그냥 다음 반복문
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const computerLen = input[0] * 1;
const nodes = new Map();
for (let i = 0; i < input[1] * 1; i++) {
  const [a, b] = input[i + 2].split(' ').map(Number);
  nodes.get(a) ? nodes.set(a, [...nodes.get(a), b]) : nodes.set(a, [b]);
  nodes.get(b) ? nodes.set(b, [...nodes.get(b), a]) : nodes.set(b, [a]);
}
const visited = new Array(computerLen + 1).fill(0);
let count = 0;
const queue = nodes.get(1) || [];
while (queue.length > 0) {
  const node = queue.shift();
  if (visited[node]) {
    continue;
  }
  visited[node] = 1;
  count++;
  queue.push(...nodes.get(node));
}
console.log(count > 0 ? count - 1 : 0);

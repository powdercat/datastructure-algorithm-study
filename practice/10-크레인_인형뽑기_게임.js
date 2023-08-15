/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/64061
 */

function solution(boardArr, moves) {
  let answer = 0;
  const queue = [];

  for (const move of moves) {
    const i = move - 1;
    for (const board of boardArr) {
      if (board[i] > 0) {
        queue.push(board[i]);
        if (queue[queue.length - 1] === queue[queue.length - 2]) {
          queue.pop();
          queue.pop();
          answer += 2;
        }
        board[i] = 0;
        break;
      }
    }
  }

  return answer;
}

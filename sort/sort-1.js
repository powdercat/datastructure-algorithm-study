/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42748
 */

function solution(array, commands) {
  const result = [];
  for (const command of commands) {
    const newArray = array.slice(command[0] - 1, command[1]);
    newArray.sort((a, b) => {
      return a - b;
    });
    result.push(newArray[command[2] - 1]);
  }
  return result;
}

/**
 * 배열 자르고
 * sort() 함수로 오름차순 정렬
 */

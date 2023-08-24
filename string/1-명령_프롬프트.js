/**
 * https://www.acmicpc.net/problem/1032
 */

const N = input[0] * 1;
const fileNames = input.slice(1);

let result = '';

const stringLength = fileNames[0].length;
for (let i = 0; i < stringLength; i++) {
  let char = fileNames[0][i];

  for (let j = 1; j < N; j++) {
    if (char !== fileNames[j][i]) {
      char = '?';
      break;
    }
  }
  result += char;
}
console.log(result);

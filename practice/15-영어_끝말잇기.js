/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12981
 */

function solution(n, words) {
  var answer = [];
  let temp;

  const set = [];
  set.push(words[0]);
  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const lastWord = words[i - 1];

    if (set.includes(word) || lastWord[lastWord.length - 1] !== word[0]) {
      temp = i;
      break;
    }
    set.push(word);
  }

  if (temp === undefined) {
    return [0, 0];
  }

  temp += 1;

  if (temp % n === 0) {
    return [n, temp / n];
  } else {
    return [temp % n, Math.floor(temp / n) + 1];
  }
}

/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/67256
 */

function solution(numbers, hand) {
  let answer = numbers;

  let leftHand = [3, 1];
  let rightHand = [3, 3];

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i] === 0 ? 11 : numbers[i];
    const numberHand = [
      number % 3 === 0 ? Math.floor(number / 3) - 1 : Math.floor(number / 3),
      number % 3 === 0 ? 3 : number % 3,
    ];
    if ([1, 4, 7].includes(number)) {
      answer[i] = 'L';
      leftHand = numberHand;
    } else if ([3, 6, 9].includes(number)) {
      answer[i] = 'R';
      rightHand = numberHand;
    } else {
      const leftDiff = Math.abs(numberHand[0] - leftHand[0]) + Math.abs(numberHand[1] - leftHand[1]);
      const rightDiff = Math.abs(numberHand[0] - rightHand[0]) + Math.abs(numberHand[1] - rightHand[1]);
      if (leftDiff === rightDiff) {
        if (hand === 'left') {
          leftHand = numberHand;
          answer[i] = 'L';
        } else {
          rightHand = numberHand;
          answer[i] = 'R';
        }
      } else if (leftDiff < rightDiff) {
        answer[i] = 'L';
        leftHand = numberHand;
      } else {
        answer[i] = 'R';
        rightHand = numberHand;
      }
    }
  }

  answer = answer.join('');
  return answer;
}

/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/150370
 */

function solution(today, terms, privacies) {
  let answer = [];
  const rule = {};
  terms.forEach(term => {
    let arr = term.split(' ');
    rule[arr[0]] = Number(arr[1]);
  });

  const todayNumber = Number(today.replaceAll('.', ''));

  for (const [i, privacy] of privacies.entries()) {
    const privacyArr = privacy.split(' ');
    const date = privacyArr[0].split('.');

    let year = Number(date[0]);
    let monthTemp = Number(date[1]) + rule[privacyArr[1]];
    let month = monthTemp;
    let remainder = month % 12;
    if (remainder === 0) {
      month = 12;
      year += monthTemp / 12 - 1;
    } else {
      month = remainder;
      year += parseInt(monthTemp / 12);
    }

    const targetDate = year * 10000 + month * 100 + Number(date[2]);
    if (targetDate <= todayNumber) {
      answer.push(i + 1);
    }
  }

  return answer;
}

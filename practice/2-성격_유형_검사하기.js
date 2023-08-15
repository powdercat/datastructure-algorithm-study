/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/118666
 */

function solution(survey, choices) {
  let answer = '';
  const category = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  for (const [i, sur] of survey.entries()) {
    let select = choices[i];
    let selectCategory = sur[0];
    if (select === 4) {
      continue;
    } else if (select < 4) {
      select = select * -1 + 4;
    } else if (select > 4) {
      select -= 4;
      selectCategory = sur[1];
    }
    category[selectCategory] += select;
  }

  category.R >= category.T ? (answer += 'R') : (answer += 'T');
  category.C >= category.F ? (answer += 'C') : (answer += 'F');
  category.J >= category.M ? (answer += 'J') : (answer += 'M');
  category.A >= category.N ? (answer += 'A') : (answer += 'N');

  return answer;
}

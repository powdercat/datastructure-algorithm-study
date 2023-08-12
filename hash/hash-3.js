/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42577
 */

function solution(phone_book) {
  const obj = {};
  var answer = true;

  phone_book.map(phone => {
    obj[phone] = true;
  });

  phone_book.map(phone => {
    for (let i = 1; i <= phone.length; i++) {
      if (obj[phone.slice(0, i)] && phone.slice(0, i) !== phone) {
        answer = false;
      }
    }
  });

  return answer;
}

/**
 * 전화번호를 미리 배열에 담아둔다.
 * 전화번호 하나씩 [0, 1], [0, 2], [0, 3] ... [0, n] 가 배열에 있는지 확인한다.
 * 있으면 false, 없으면 true
 * 여기서 본인과 같은 전화번호는 제외한다.
 */

/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12985
 */

function solution(N, A, B) {
  let tempN = N;
  let n = 0;
  while (tempN !== 1) {
    tempN /= 2;
    n++;
  }

  if (A > B) {
    let tmp = A;
    A = B;
    B = tmp;
  }

  for (let k = 1; k <= n; k++) {
    if (k === n) {
      return 1;
    }
    const m = N / 2 ** k;
    if (A <= m && B > m) {
      return n + 1 - k;
    }
    if (A > m && B > m) {
      A -= m;
      B -= m;
    }
  }
}

// m = N/2의1승, A는 m보다 작고 B는 m보다 크다면? (n + 1) - 1승
// m = N/2의2승, A는 m보다 작고 B는 m보다 크다면? (n + 1) - 2승

// m = N/2의k승, A는 m보다 작고 B는 m보다 크다면? (n + 1) - k
// A, B 둘 다 m보다 크다면 m을 뺀다.

/*
방법 2
1-2 / 3-4 / 5-6 / 7-8
1   / 2   / 3   / 4 => 나누기 2의 올림
A 와 B가 같아질때까지
*/

/*
방법 3
1-2 / 3-4 / 5-6 / 7-8
2-3 / 4-5 / 6-7 / 8-9 +1 하면 올림 할 필요 없음
*/

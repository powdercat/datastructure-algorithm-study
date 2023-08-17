/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/92335
 */

function solution(n, k) {
  let base = n.toString(k);
  const array = base.split('0');
  let count = 0;
  for (const num of array) {
    if (num !== '' && isPrime(Number(num))) {
      count++;
    }
  }
  return count;
}

function isPrime(num) {
  if (num === 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

/**
 * 1. n을 k진수로 변환한다.
 * 2. "0"을 기준으로 잘라서 array 에 넣는다.
 * 3. array 돌면서 소수면 +1, 여기서 array 는 "0" 기준으로 잘라서 넣었기 때문에 "" 가 있을 수 있다. 이건 제외해야 한다.
 */

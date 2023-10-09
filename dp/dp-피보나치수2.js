/**
 * https://www.acmicpc.net/problem/2748
 */

/*
재귀함수의 기본동작 fib(n) = fib(n - 1) + fib(n - 2)
재귀함수의 탈출조건 fib(0) = 0, fib(1) = 1

fib(n)
    // 탈출조건
    if (num <= 1)
        return num
    
    // 기본동작
    return fib(n - 1) + fib(n - 2)

DP란? 한 번 연산한 것은 다시 풀지 않겠다.

이미 연산한 것을 담을 배열 dp 선언 및 초기화
fib(n)
    // 탈출조건
    한 번도 연산한 적 없다면
        dp[n] = fib(n - 1) + fib(n - 2)
    // 기본동작
    return dp[n];
*/

/*
js에서 나타낼 수 있는 숫자 범위를 벗어나기 때문에 오차가 생긴다.
n이 90일 때, BigInt를 안 쓰면 2880067194370816000
BigInt 쓰면 2880067194370816120
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = input[0] * 1;
const dp = new Array(100).fill(-1);
dp[0] = 0;
dp[1] = 1;
function fib(num) {
    // 탈출 조건
    if (dp[num] === -1) {
        // 한 번도 연산된 적이 없다면
        dp[num] = BigInt(fib(num - 1)) + BigInt(fib(num - 2));
    }

    // 기본 동작
    return dp[num];
}
console.log(fib(n) + '');

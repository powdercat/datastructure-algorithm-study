const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const cardArr = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const testArr = input[3].split(' ').map(Number);

const result = [];

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      if (mid > start && arr[mid - 1] === target) {
        end = mid - 1;
        continue;
      } else {
        return mid;
      }
    }

    if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

function binaryEndSearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      if (mid < end && arr[mid + 1] === target) {
        start = mid + 1;
        continue;
      } else {
        return mid;
      }
    }

    if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

for (const test of testArr) {
  let index = binarySearch(cardArr, test);
  if (index === -1) {
    result.push(0);
    continue;
  }
  const lastIndex = binaryEndSearch(cardArr, test);
  result.push(lastIndex - index + 1);
}

console.log(result.join(' '));

// 이진탐색 알고리즘 사용

// hash 를 이용해서 풀어도 됨. 숫자별로 각각 몇 개씩 가졌는지 구하는 방법

/*
// 아래 방식으로 풀면 시간 초과 - 이유: indexOf 는 O(N)의 시간 복잡도를 가짐

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const cardArr = input[1].split(" ").map(Number).sort((a, b) => a - b);
const testArr = input[3].split(" ").map(Number);

const result = [];

for (const test of testArr) {
    let index = cardArr.indexOf(test);
    if (index === -1) {
        result.push(0);
        continue;
    }
    const lastIndex = cardArr.lastIndexOf(test);
    result.push(lastIndex - index + 1);
}

console.log(result.join(" "));
 */

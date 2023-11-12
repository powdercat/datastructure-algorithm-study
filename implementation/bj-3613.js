/*
https://www.acmicpc.net/problem/3613

입력형식이 잘못된 조건을 잘 생각해야 함
1. 첫 글자가 _인 경우
2. 첫 글자가 대문자인 경우
3. 마지막 글자가 _인 경우
4. 연속 _인 경우
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function transform(str) {
    const asciiArr = [];
    let hasDash = false;
    let hasUpper = false;

    for (let i = 0; i < str.length; i++) {
        const ascii = str.charCodeAt(i);
        if ((i === 0 && (ascii === 95 || (ascii >= 65 && ascii <= 90))) || (i === str.length - 1 && ascii === 95)) {
            return 'Error!';
        }
        if (ascii === 95) {
            if (str.charCodeAt(i + 1) === 95) {
                return 'Error!';
            }
            hasDash = true;
        } else if (ascii >= 65 && ascii <= 90) {
            hasUpper = true;
        }
        asciiArr.push(ascii);
    }
    if (hasDash && hasUpper) {
        return 'Error!';
    }
    if (hasDash) {
        let result = '';
        for (let i = 0; i < asciiArr.length; i++) {
            const ascii = asciiArr[i];
            if (ascii === 95) {
                result += String.fromCharCode(asciiArr[i + 1] - 32);
                i++;
            } else {
                result += String.fromCharCode(ascii);
            }
        }
        return result;
    } else if (hasUpper) {
        let result = '';
        for (let i = 0; i < asciiArr.length; i++) {
            const ascii = asciiArr[i];
            if (ascii >= 65 && ascii <= 90) {
                result += '_' + String.fromCharCode(ascii + 32);
            } else {
                result += String.fromCharCode(ascii);
            }
        }
        return result;
    } else {
        return str;
    }
}

console.log(transform(input[0]));

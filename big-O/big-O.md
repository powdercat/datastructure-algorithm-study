# Big-O notation (빅오 표기법)
알고리즘의 시간 복잡도이다. 연산의 수행 횟수를 대략적(점근적)으로 표기한 것이다.

## 알고리즘 성능 분석 방법

알고리즘의 성능을 분석하는 방법은 크게 두 가지가 있다.

1. 수행 시간 측정

2. 복잡도 분석: Big-O notation

1번의 경우 같은 알고리즘이어도 컴퓨터 자원에 따라 수행 시간이 달라질 수 있다.

따라서 알고리즘 성능은 2번을 통해 분석하는 것이 좋다.

## 알고리즘 분석 예시

같은 작업을 수행하는데 5개의 스텝을 수행하는 알고리즘은 100개의 스텝을 수행하는 알고리즘보다 훌륭한 알고리즘이다.

## 빅오 표기법의 종류

1. O(1): 상수형

2. O(log n): 로그형

3. O(n): 선형

4. O(n log n): 선형로그형

5. O(n^2): 2차형

6. O(n^3): 3차형

7. O(2^n): 지수형

8. O(n!): 팩토리얼형

### O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(n^3) < O(2^n) < O(n!)

![Alt text](/images/big-O-type.png)

## 빅오 표기법의 예시

### 1. O(1)

```javascript
function func(array) {
    console.log(array[0]);
}
```

이 함수는 인풋 array 사이즈와 상관없이 동일한 수의 연산(1번)을 수행한다.

이 함수의 시간 복잡도는 constant time 이다. O(1) 이라고 표기한다.

그렇다면 두 번 출력하면 O(2) 일까?

```javascript
function func(array) {
    console.log(array[0]);
    console.log(array[0]);
}
```

아니다. 이 함수도 마찬가지로 인풋 array 사이즈와 상관없이 동일한 수의 연산을 수행하기 때문에 O(1) 이다. **빅오는 상수를 신경쓰지 않는다!**

### 2. O(n)

```javascript
function func(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
```

이 함수는 인풋 array 사이즈만큼 연산을 수행한다. O(n) 이라고 표기한다.

인풋이 5개면 5번, 10개면 10번, 100개면 100번 연산을 수행한다.

ex) 선형 검색(Linear Search): 배열의 처음부터 끝까지 순차적으로 검색하는 방법

### 3. O(n^2)

```javascript
function func(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i], array[j]);
        }
    }
}
```

이 함수는 인풋 array 사이즈의 제곱만큼 연산을 수행한다. O(n^2) 이라고 표기한다.

중첩 반복이 있을 때 O(n^2) 이다.

10개의 인풋이 있으면 100번, 100개의 인풋이 있으면 10000번 연산을 수행한다.

### 4. O(log n)

대표적인 예시로 이진 검색(Binary Search) 알고리즘의 시간 복잡도는 O(log n) 이다.

이진 검색은 각 단계마다 검색 범위를 절반으로 줄여나간다. 따라서 인풋 사이즈가 2배가 되어도 연산 횟수는 1번만 늘어난다.

## 참고

* 빅오는 적어도 두 알고리즘을 비교할 때 사용한다.

* O(2^n), O(n!) 알고리즘은 사실상 쓰지 않는다.

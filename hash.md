# Hash Table
Hash Table 은 Key-Value 데이터 구조를 가진다.

## 언어 별 구현
1. javascript 에서는 hash 를 Object 로 구현한다.

    ```javascript
    const hash = {
        'key1': 'value1',
        'key2': 'value2'
    };
    ```

2. python 에서는 hash 를 Dictionary 로 구현한다.

    ```python
    hash = {
        'key1': 'value1',
        'key2': 'value2'
    }
    ```
해시 테이블은 이미 많은 프로그래밍 언어에서 기본적으로 제공된다.

## 배열 vs 해시 테이블

```javascript
const array = [
    {key: 'key1', value: 'value1'},
    {key: 'key2', value: 'value2'},
];
```

```javascript
const hash = {
    'key1': 'value1',
    'key2': 'value2'
};
```
array 에서 key1 의 value 를 얻으려면, 선형 검색(Linear Search)을 하면 된다. (선형 검색(Linear Search): 배열의 처음부터 끝까지 순차적으로 검색하는 방법)

이 경우 시간 복잡도는 O(n) 이다.

hash 에서 key1 의 value 를 얻으려면, hash[key1] 을 통해 'value1' 을 얻을 수 있다.

이 경우 시간 복잡도는 O(1) 이다.

-> 해시 테이블은 배열과 비교했을 때 매우 빠르다.

## 해시 테이블은 어떻게 동작하는걸까? (Hash Function)
왜 해시 테이블은 더 빠를까?

해시 테이블도 사실 내부적으로는 배열을 사용한다.

![Alt text](/images/hash-table.png)

Key -> Hash Function -> Value

key 를 Hash Function 에 넣으면 배열의 index 로 바꿔준다. 그 index 를 통해 value 를 가져온다.

하지만 다른 key 를 넣었는데 Hash Function 의 결과값이 같을 수 있다. => 해시 충돌 (Hash Collision)

## 해시 충돌 (Hash Collision)
Hash Function 은 서로 다른 key 에 대해 같은 index 를 반환할 수 있다. 이를 해시 충돌이라고 한다.

해결 방법
* Separate Chaining

    다른 key 인데 같은 index 를 반환하면, Hash Table 의 index 에 Linked List 를 만들어서 연결한다.

    ![Alt text](/images/hash-separate-chaining.png)

    같은 index 인 경우 Linked List 에서 선형 검색을 해야하기 때문에 해시 테이블의 시간 복잡도가 항상 O(1) 인 것은 아니다.
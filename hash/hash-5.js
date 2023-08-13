/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42579
 */

function solution(genres, plays) {
  var answer = [];
  const map = new Map();
  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const play = plays[i];
    if (map.get(genre)) {
      const inMap = map.get(genre);
      inMap.set('count', inMap.get('count') + play);
      const ininMap = inMap.get('index');
      ininMap.set(i, play);
    } else {
      const inMap = new Map();
      const ininMap = new Map();
      ininMap.set(i, play);
      inMap.set('index', ininMap);
      inMap.set('count', play);
      map.set(genre, inMap);
    }
  }
  for (const [key, value] of map) {
    const inMap = value.get('index');
    value.set('index', new Map([...inMap.entries()].sort((a, b) => b[1] - a[1])));
  }
  const mapSort = new Map([...map.entries()].sort((a, b) => b[1].get('count') - a[1].get('count')));

  for (const [key, value] of mapSort) {
    const inMap = value.get('index');
    let i = 0;
    for (const [key2, value2] of inMap) {
      if (i == 2) {
        break;
      }
      answer.push(key2);
      i++;
    }
  }
  return answer;
}

/**
 * {
 *    'classic': {
 *      'index': {0: 500, 2: 150, 3: 800},
 *      'count': 1450
 *    },
 *    'pop': {
 *      'index': {1: 600, 4: 2500},
 *      'count': 3100
 *    }
 * }
 *
 * 1. 인풋을 이 구조를 가진 map 으로 만든다. (내부도 다 map)
 * 2. index 기준으로 정렬한다.
 * 3. count 기준으로 정렬한다.
 * 4. 2개씩 뽑아서 answer 에 넣는다.
 */

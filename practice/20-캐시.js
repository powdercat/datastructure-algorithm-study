/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/17680
 */

function solution(cacheSize, cities) {
  if (cacheSize === 0) {
    return 5 * cities.length;
  }

  var answer = 5;
  let array = [cities[0].toLowerCase()];

  for (let i = 1; i < cities.length; i++) {
    const city = cities[i].toLowerCase();
    const index = array.indexOf(city);
    if (index === -1) {
      answer += 5;
      array.push(city);
      if (array.length > cacheSize) {
        array.shift();
      }
    } else {
      array = [...array.slice(0, index), ...array.slice(index + 1), city];
      answer += 1;
    }
  }

  return answer;
}

/*
array 에 cacheSize 만큼 하나씩 넣고
인풋이 array 에 없으면 miss
  +5
  array.push
  만약 array 길이 >= cacheSize 이면
      shift
  
인풋이 array 에 있으면 hit
  +1
  해당 인덱스로 가서 값 삭제하고
  array.push
*/

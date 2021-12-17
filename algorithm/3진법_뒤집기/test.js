function solution(n) {
  var answer = 0;
  var threeNumber = n.toString(3);

  for (let i = 0; i < threeNumber.length; i++) {
    answer += threeNumber[i] * Math.pow(3, i);
  }

  return answer;
}


function solution2(n) {
   Array.from(n.toString(3)).reduce((acc, cur, i) => {
    return acc += cur * Math.pow(3, i);
  }, 0);
}


solution2(11);
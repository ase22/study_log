function solution(left, right) {
  var answer = 0;
  var arr = [];

  for (let i = left; i < right + 1; i++) {
    let dividingCuont = 0;

    for (let j = 1; j < i + 1; j++) {
      if (i % j === 0) {
        dividingCuont++;
      }

      if (j === i) {

        arr.push(dividingCuont);
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      answer = answer - i - left;
    } else {
      answer = answer + i + left;
    }

  }
  console.log(arr);
  return answer;
}

console.log(solution(10, 15));

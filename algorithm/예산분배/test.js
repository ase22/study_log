function solution(d, budget) {
  d.sort((a, b) => a - b);
  let bg = budget;

  for (let i = 0; i < d.length; i++) {
    bg = bg - d[i];
    if (bg < 0) {
      return i;
    } else if (bg === 0 || (bg >=0 && i === d.length - 1)) {
        return i + 1;
    }
  }
}

function solution2(d, budget) {
  let answer = 0;
  let money = 0;
  d.sort((a, b) => a - b).forEach(function (val) {
    money = money + val;
    if (money <= budget) {
      answer++;
    }
  });

  return answer;
}
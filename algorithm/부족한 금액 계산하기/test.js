function solution(price, money, count) {
  let answer;
  let ticketPrice = price;
  for (let i = 0; i < count; i++) {
    ticketPrice = price * (i + 1);
    money = money - ticketPrice;
  }

  answer = money < 0 ? -money : 0;
  return answer;
}

console.log(solution(3, 20, 4));
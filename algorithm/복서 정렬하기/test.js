function solution(weights, head2head) {
  var answer = [];

  const winRate = head2head.map((player, index) => {
    let gameCount = 0;
    let winCount = 0;
    let overweightWin = 0;
    let winrate = 0;

    for (let i = 0; i < player.length; i++) {
      if (player[i] !== 'N') {
        gameCount++;
      }

      if (player[i] === 'W') {
        winCount++;

        if (weights[index] < weights[i]) {
          overweightWin++;
        }
      }
    }

    if (gameCount !== 0) {
      winrate = winCount / gameCount;
    }

    return [index + 1, winrate, overweightWin, weights[index]];
  }).sort(function(a, b) {
    if (a[1] > b[1]) {
      return -1;
    }
    if (a[1] < b[1]) {
      return 1;
    }
    if (a[1] === b[1] && a[2] > b[2]) {
      return -1;
    }
    if (a[1] === b[1] && a[2] < b[2]) {
      return 1;
    }
    if (a[1] === b[1] && a[2] === b[2] && a[3] > b[3]) {
      return -1;
    }
    if (a[1] === b[1] && a[2] === b[2] && a[3] < b[3]) {
      return 1;
    }
    if (a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[0] > b[0]) {
      return 1;
    }
    if (a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[0] < b[0]) {
      return -1;
    }
  });

    answer = winRate.map((player => player[0]));

    return answer;
}



const weights = [60,70,60];
const head2head = ["NNN","NNN","NNN"];
solution(weights, head2head);
//1. 각 선수별 승률을 구해서 승률순으로 정렬한다.
//2. 만약에 승률이 같다면 무거운 복서를 이긴 횟수대로 다시 정렬한다.
//3. 무거운 복서 이긴 횟수도 같다면 선수 번호순으로 정렬한다.
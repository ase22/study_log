function solution(scores) {
  var answer = '';
  var subject = new Array(scores.length);
  
  var realScores = [];
  for (let i = 0; i < scores.length; i++) {
    const arr = [];
    for (let j = 0; j < scores.length; j++) {
      arr.push(scores[j][i]);
    }
    realScores.push(arr);
  }

  var scoreSum = realScores.map((student, i) => {
    const maxScore = Math.max(...student);
    const minScore = Math.min(...student);
    let maxCount = 0;
    let minCount = 0;
    let isPassed = false;

    subject[i] = student.length;

    return student.reduce((acc, cur, v) => {
      if (maxScore === realScores[i][i] && (maxScore > student[v]) && i !== v) {
        maxCount++;
      }

      if (minScore === realScores[i][i] && (minScore < student[v]) && i !== v) {
        minCount++;
      }

      if ((minCount === student.length - 1 || maxCount === student.length - 1) && !isPassed) {
        subject[i] = subject[i] - 1;
        acc = acc - realScores[i][i];
        isPassed = true;
      }

      return acc + cur;
    }, 0);
  });

  var answerArr = scoreSum.map((grade, i) => {
    return grade / subject[i];
  });

  answerArr.forEach(answers => {
    if (answers < 50) {
      answer = answer + 'F';
    }
    if (answers >= 50 && answers < 70) {
      answer = answer + 'D';
    }
    if (answers >= 70 && answers < 80) {
      answer = answer + 'C';
    }
    if (answers >= 80 && answers < 90) {
      answer = answer + 'B';
    }
    if (answers >= 90) {
      answer = answer + 'A';
    }
  })
}




function solution2(scores) {
  return scores.map((score, i) => {
    return scores.map((score) => score[i])
  }).map((score, i) => {
    let sum = score.reduce((acc, cur) => {return acc + cur}, 0);
    let avg = sum / score.length;
    console.log(sum,avg);
    let m = score.splice(i, 1)[0];
    if (m > Math.max(...score) || m < Math.min(...score)) {
      sum -= m;
      avg = sum / score.length;
    }

    return 'FFFFFDDCBAA'[Math.floor(avg/10)];
  }).join('');
}

// 1. map 중첩으로 [[],[]] 2차원 배열 만들고 그 안 배열에는 각각 한사람의 점수를 담는다.
// 2. map 돌려서 한 사람의 총 합과 평균을 구한다.
// 3. 나 코드와 이 코드가 다른 점은 내 코드는 i,i번째 점수가 포함된 max 결과와 비교하기 때문에 모든 점수를 비교해야 하지만,
// 4. 이 코드는 i,i 번째 코드를 제외한 후의 max와 i,i 번째 점수를 비교하기 때문에 한 번만 if 문을 돌리면 가장 큰 수인지
// 5. 가장 작은 수 인지를 평가할 수 있다
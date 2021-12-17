// function solution(table, languages, preference) {
//   var answer = '';
//   var arr = [];
//   var obj = {};

//   for (let i = 0; i <table.length; i++) {
//     const newTable = table[i].split(' ');
//     arr.push(newTable);
//   }
  
//   for (let i = 0; i < arr.length; i++) {
//     obj[arr[i][0]] = 0;
//     for (let j = 0; j < languages.length; j++) {
//       const score = arr[i].indexOf(languages[j]);
//       if (score === -1) {
//         continue;
//       }
//       obj[arr[i][0]] += preference[j] * (6 - arr[i].indexOf(languages[j]));
//     }
//   }

//   const highestScore = Math.max(...Object.values(obj));
//   for (let i = 0; i < Object.keys(obj).length; i++) {
//     if (Object.values(obj)[i] === highestScore) {
//       if (answer && answer.charAt(answer[0] < Object.keys(obj)[i][0])) {
//         return answer = Object.keys(obj)[i];
//       }
//       answer = Object.keys(obj)[i];
//     }
//   }

//   return answer;
// }


function solution(table, languages, preference) {
  var answer = '';
  console.log(table.map((r) => r.split(' '))
  .map((t) => [...t.splice(0, 1), t])
  .map(([t, arr]) => [t, languages.reduce((acc, l, i) => {
      acc += (5 - (arr.indexOf(l) === -1 ? 5 : arr.indexOf(l))) * preference[i];
      return acc;
    }, 0)])
  .sort((a, b) => b[1] - a[1] - (a[0] < b[0]))[0][0]);
}
const table1 = ["SI JAVA JAVASCRIPT SQL PYTHON C#", "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++", "HARDWARE C C++ PYTHON JAVA JAVASCRIPT", "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP", "GAME C++ C# JAVASCRIPT C JAVA"];
const languages1 = ["JAVA", "JAVASCRIPT"];
const preference1 = [7, 5];

console.log(solution(table1, languages1, preference1));


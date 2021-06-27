let array = [1,5,2,6,3,7,4];
let commands = [[2,5,3],[4,4,1],[1,7,3],[-1,3,2]];

function solution(array,commands) {
    let tempArr = [];
    let answer = [];
    for (let i = 0;i<commands.length;i++) {
        let firstNumberIndex = commands[i][0]-1;
        let lastNumberIndex = commands[i][1];
        let selectedNumberIndex = commands[i][2]-1;
        if (firstNumberIndex === lastNumberIndex) {
            tempArr[0] = array[firstNumberIndex];
        }
        else {
            for (let j = firstNumberIndex;j<lastNumberIndex;j++) {
            tempArr.push(array[j]);
            }
        }
        tempArr.sort();
        console.log(tempArr);
        answer.push(tempArr[selectedNumberIndex]);
        tempArr = [];
    }
    console.log(answer);
}
solution(array,commands);
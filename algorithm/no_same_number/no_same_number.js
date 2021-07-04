let arr = [1,1,1,2,2,3,4,4];
function solution(arr) {
    var answer = [];
    answer.push(arr[0]);
    for (let i = 1;i<arr.length;i++) {
        if (arr[i] !== arr[i-1]) {
            answer.push(arr[i]);
        }
    }
    return answer;
}
console.log(solution(arr));
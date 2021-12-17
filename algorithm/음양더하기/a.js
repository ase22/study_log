function solution(absolutes, signs) {
    var answer = 0;
    for (let i = 0; i<absolutes.length; i++) {
        signs[i] = signs[i] === true ? +1 : -1 ;
        const newNumber = absolutes[i] * signs[i];
        answer += newNumber;
    }
    return answer;
}
console.log(solution([4, 6, 7], [true, false, false]));
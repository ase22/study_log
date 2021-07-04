let x = 13;

function solution(x) {
    let addNumber = 0;
    const stringX = x.toString();
    for (let i = 0;i<stringX.length;i++) {
        addNumber+=parseInt(stringX[i]);
    }
    return x%addNumber===0;
}
console.log(solution(x));
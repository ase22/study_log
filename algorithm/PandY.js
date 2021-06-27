const s = 'yyYYpfdfP';

function solution(s){
    var answer = true;
    var pCount = 0;
    var yCount = 0;
    var Arr = [];
    uppercasedS = s.toUpperCase();
    console.log(uppercasedS);
    
    for (var i = 0;i<s.length;i++) {
        if (uppercasedS[i] === 'P') {
            pCount++;
        } else if (uppercasedS[i] === 'Y') {
            yCount++;
        }
    }
    if (pCount === yCount || pCount && yCount === 0)  {
        answer = true;
    } else if (pCount !==yCount) {
        answer = false;
    }
    return console.log(answer);
}

solution(s);
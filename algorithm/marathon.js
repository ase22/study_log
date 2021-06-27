let participant = ['sangeon','jimin','minsoo','minsoo'];
let completion = ['minsoo','jimin'];
let answer = [];
const c_value = completion.length;

function solution(participant, completion) {
    let newArr = [];
    let answer =[];
    for (let i =0;i<completion.length;i++) {
        for (let j=0;j<participant.length;j++) {
            if (participant[j]===completion[i]) {
                participant.splice(j,1,'0');
                completion.splice(i,1,'0');
                break;
            }
        }
    }

    for (let i = 0;i<participant.length;i++) {
        if (participant[i]!=='0') {
            console.log(participant[i]);
            answer.push(participant[i]);
            
        }
    }
    console.log(answer);
}
solution(participant,completion);



    
    // for (let i = 0;i<participant.length;i++) {
    //     let count = 0;
    //     for (let j = 0;j<newArr.length;j++) {
    //         if (i!==newArr[j]) {
    //             count++;
    //         }
    //     }
    //     if  (count === newArr.length) {
    //         answer.push(participant[i]);
    //     }
    // }
    // console.log(newArr);
    // console.log(answer[0]);
    // console.log(answer);

// console.log(solution(participant,completion));


// function solution(participant, completion) {
//     let newArr = [];
//     let answer =[];
//     for (let i =0;i<completion.length;i++) {
//         for (let j=0;j<participant.length;j++) {
//             if (participant[j]===completion[i]) {
//                 newArr.push(j);
//                 newArr.sort();
//                 participant.splice();
//                 break;
//             }
//         }
//     }
//     for (let i = 0;i<participant.length;i++) {
//         let count = 0;
//         for (let j = 0;j<newArr.length;j++) {
//             if (i!==newArr[j]) {
//                 count++;
//             }
//         }
//         if  (count === newArr.length) {
//             answer.push(participant[i]);
//         }
//     }
 
//         return answer[0];
    
// }
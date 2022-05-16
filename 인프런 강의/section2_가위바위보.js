// 내 풀이 
// function solution(player1, player2) {
//     let winner=[], index=5;

//     for(let i=0; i<index; i++) {
//         if(((player1[i]==1)&&(player2[i]==3))||((player1[i]==2)&&(player2[i]==1))||((player1[i]==3)&&(player2[i]==2))) {
//             winner.push('A');
//         } else if(((player1[i]==3)&&(player2[i]==1))||((player1[i]==1)&&(player2[i]==2))||((player1[i]==2)&&(player2[i]==3))) {
//             winner.push('B');
//         } else {
//             winner.push('D');
//         }
//     }

//     return winner;
// }

// let player1 = [2, 3, 3, 1, 3];
// let player2 = [1, 1, 2, 2, 3];

// console.log(solution(player1, player2));

// 정답
function solution(a, b){         
    let answer="";
    for(let i=0; i<a.length; i++){
        if(a[i]===b[i]) answer+="D ";
        else if(a[i]===1 && b[i]===3) answer+="A ";
        else if(a[i]===2 && b[i]===1) answer+="A ";
        else if(a[i]===3 && b[i]===2) answer+="A ";
        else answer+="B ";
    }
    
    return answer;
}

let a=[2, 3, 3, 1, 3];
let b=[1, 1, 2, 2, 3];
console.log(solution(a, b));
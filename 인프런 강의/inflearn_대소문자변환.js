// 내 풀이
function solution(s) {
    let answer = '';
    for(x of s) {
        if(x===x.toUpperCase()) {
            answer += x.toLowerCase();
        } else if(x === x.toLowerCase()) {
            answer += x.toUpperCase();
        }
    }
    return answer;
}

let str = 'StuDY';
console.log(solution(str));

// 정답
function solution(s){  
    let answer="";
    for(let x of s){
        if(x===x.toUpperCase()) answer+=x.toLowerCase();
        else answer+=x.toUpperCase();
    }
    return answer;
}

console.log(solution("StuDY"));
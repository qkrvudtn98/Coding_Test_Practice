// 내 풀이
function solution(string) {
    answer = 0;
    for(x of string) {
        if(x=="R") answer++; 
    }

    return answer;
}

let string = "COMPUTERPROGRAMMING";

console.log(solution(string));

// 정답
function solution(s, t){
    let answer=0;
    for(let x of s){
        if(x===t) answer++;
    }
    return answer;
}

let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));
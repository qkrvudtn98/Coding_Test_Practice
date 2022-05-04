//풀이
function solution(n){
    let answer;
    answer=parseInt((n/12)+1);
    return answer;
}

console.log(solution(178));
console.log(solution(25));

//정답
function solution1(n){
    let answer;
    answer=Math.ceil(n/12);
    return answer;
}

console.log(solution1(178));
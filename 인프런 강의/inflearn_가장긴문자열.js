// 정답
function solution(s) {
    let answer = "", max = Number.MIN_SAFE_INTEGER;
    for(x of s) {
        if(x.length>max) {
            answer=x;
        }
    }
    return answer;
}

let str = ['teacher', 'time', 'student', 'beautiful'];

console.log(solution(str));
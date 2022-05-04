// 내 풀이 
function solution(a, b, c){
    if (a<=100 && b<=100 && c<=100) {
        if (a < b) {
            if (a < c) {
                return a;
            } else {
                return c;
            }
        } else {
            if (b < c) {
                return b;
            } else {
                return c;
            }
        }
    }
};

console.log(solution(6,5,11));

// 정답
function solution1(a, b, c){
    let answer;
    if(a<b) answer=a;
    else answer=b;
    if(c<answer) answer=c; 
    return answer;
}

console.log(solution1(2, 5, 1));
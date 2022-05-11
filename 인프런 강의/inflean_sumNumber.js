// 내 풀이
function solution(n) {
    let count = 0;
    for(let i=0; i<=n; i++) {
        count += i;
    }
    console.log(count);
}

solution(20);

// 정답 

function solution(n){
    let answer=0;
    for(let i=1; i<=n; i++){
        answer=answer+i;
    }
    
    return answer;
}

console.log(solution(10));
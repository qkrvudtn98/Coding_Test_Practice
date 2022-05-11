//내 풀이 
function solution(arr) {
    let count = 0;
    for(let x of arr) {
        if(x%10 === 3) count++;
    }
    return count;
}

let date = 3;
arr = [25, 23, 11, 47, 53, 17, 33];

console.log(solution(arr));

// 정답
function solution(day, arr){
    let answer=0;
    for(let x of arr){
        if(x%10==day) answer++;
    }
    
    return answer;
}

arr=[25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
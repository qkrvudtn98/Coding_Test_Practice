// 내 풀이
function solution(arr) {
    let count=0, sum=0;

    for(let i=0; i<arr.length; i++) {
        if(arr[i]===1) count++;
        else count=0;
        sum += count;
    }
    return sum;
}

let answer=[1, 0, 1, 1, 1, 0, 0, 1, 1, 0];

console.log(solution(answer));

// 정답
function solution(arr){         
    let answer=0, cnt=0;
    for(let x of arr){
        if(x===1){
            cnt++;
            answer+=cnt;
        }
        else cnt=0;
    }
       
    return answer;
}

let arr=[1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
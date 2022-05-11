// 내 풀이 
function solution(arr) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i] % 2 === 1) odd.push(arr[i]);
    };
    for(let j=0; j<odd.length; j++) {
        if(odd[j]<min) min = odd[j];
    }
    return min;
}

let odd = [];
let arr = [12, 77, 38, 41, 53, 92, 85], min=Number.MAX_SAFE_INTEGER;

console.log(solution(arr));

// 정답
function solution(arr){
    let answer=[];
    let sum=0, min=1000;
    for(let x of arr){
        if(x%2===1){
            sum+=x;
            if(x<min) min=x;
        }
    }
    answer.push(sum);
    answer.push(min);     
    return answer;
}

arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
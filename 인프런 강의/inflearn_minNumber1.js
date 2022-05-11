// 내 풀이 
function solution() {
    let arr = [5, 3, 7, 11, 2, 15, 17];
    let answer = arr[0];

    for(let i=0; i<=arr.length-1; i++) {
        if(answer >= arr[i]) {
            answer = arr[i];
        }
    }
    return answer;
}

console.log(solution());

// 정답
function solution(arr){         
    let answer, min=Number.MAX_SAFE_INTEGER;
    for(let i=0; i<arr.length; i++){
        if(arr[i]<min) min=arr[i];
    }
    answer=min;
    return answer;

}

let arr=[5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));
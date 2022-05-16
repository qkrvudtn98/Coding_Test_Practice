// 내 풀이
function solution(arr) {
    let answer=[], max = Number.MIN_SAFE_INTEGER;
    let count=0;

    for(i=0; i<arr.length; i++) {
        if(arr[i]>max) {
            max=arr[i];
            answer.push(max);
            count++;
        } 
    }

    return count;
}

let height = [130, 135, 148, 140, 145, 150, 150, 153];

console.log(solution(height));

// 정답
function solution(arr){         
    let answer=1, max=arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i]>max){
            answer++;
            max=arr[i];
        }
    }
    return answer;
}

let arr=[130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
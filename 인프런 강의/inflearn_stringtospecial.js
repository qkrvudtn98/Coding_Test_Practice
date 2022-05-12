// 내 풀이 
function solution(arr) {
    let answer = arr; 
    for(let i=0; i<arr.length; i++) {
        if(arr[i] == 'A') arr[i] = '#';
    }

    return answer;
}

let arr = ['B', 'A', 'N', 'A', 'N', 'A'];

console.log(solution(arr));

// 정답
function solution(s){
    let answer="";
    for(let x of s){
        if(x=='A') answer+='#';
        else answer+=x;
    }
    return answer;
}

let str="BANANA";
console.log(solution(str));
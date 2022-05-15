// 내 풀이
function solution(s) {
    let answer = "";
    let mid = Math.floor(s.length/2);

    if((s.length%2)==1) {
        answer = s[mid];
    } else if((s.length%2)==0) {
        answer = s.substring(mid-1, mid+1);
    }
    return answer;
}

let odd = 'study';
let even = 'good';

console.log(solution(odd)); 
console.log(solution(even)); 

// 정답
function solution(s){  
    let answer;
    let mid=Math.floor(s.length/2)
    if(s.length%2===1) answer=s.substring(mid, mid+1);
    else answer=s.substring(mid-1, mid+1);
    //if(s.length%2===1) answer=s.substr(mid, 1);
    //else answer=s.substr(mid-1, 2);
    return answer;
}
console.log(solution("study"));
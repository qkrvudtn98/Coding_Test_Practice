// 내 풀이 
function solution(arr) {
    let answer = [];
    for(i=0; i<arr.length; i++) {
        if(arr.indexOf(arr[i])===i) answer.push(arr[i]);
    }
    return answer;
}

let words = ['good', 'time', 'good', 'time', 'student'];

console.log(solution(words));

// 정답 
function solution(s){  
    let answer;
    //console.log(s.indexOf("time"));
    answer=s.filter(function(v, i){
        return s.indexOf(v)===i;
    });
    return answer;
}
let str=["good", "time", "good", "time", "student"];
console.log(solution(str));
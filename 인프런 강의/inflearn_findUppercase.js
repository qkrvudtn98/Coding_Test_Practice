// 내 풀이 
function solution(str) {
    let answer = 0;
    for(x of str) {
        if(x === x.toUpperCase()) answer++;
    }
    return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));

// 정답
function solution(s){         
    let answer=0;
    for(let x of s){
        //let num=x.charCodeAt();
        //if(num>=65 && num<=90) answer++;
        if(x===x.toUpperCase()) answer++; 
    }

    return answer;
}

let str1="KoreaTimeGood";
console.log(solution(str1));
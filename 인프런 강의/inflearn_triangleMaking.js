//풀이
function solution(a, b, c){
    let max;
    let etc;
    if (a>b) {
        max = a;
        etc = b+c;
    } else {
        max = b;
        etc = a+c;
    }
    if (max < c) {
        max = c;
        etc = a+b;
    }

    let result;
    if(max >= etc) {
        result = 'NO';
    } else {
        result = 'YES';
    }

    return result;
}

console.log(solution(13, 33, 17));
console.log(solution(6, 7, 11));

//정답
function solution1(a, b, c){
    let answer="YES", max;
    let tot=a+b+c;
    if(a>b) max=a;
    else max=b;
    if(c>max) max=c;
    if(tot-max<=max) answer="NO"; 
    return answer;
}

console.log(solution1(13, 33, 17));

/** [보완점]
 * 삼각형의 세 변 중에서 가장 긴 변은 구할 수 있지만, 
 * 어떤 변이 두번쨰, 세번째인지는 직접적으로 알아 낼 수가 없음
 * 따라서 모든 변의 합 - 가장 긴 변을 따로 변수로 만들어내주는 과정을 생각하지 못함 
*/

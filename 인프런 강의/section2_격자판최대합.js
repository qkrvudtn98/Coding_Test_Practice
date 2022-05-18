function solution(arr) {
    let answer=Number.MIN_SAFE_INTEGER; //초깃값 안전하게 설정 
    let n=arr.length;
    let sum1=sum2=0;

    for(let i=0; i<n; i++) {
        sum1=sum2=0; //행, 열을 한 번씩 돌 때마다 값을 0으로 초기화 
        for(let j=0; j<n; j++) {
            sum1 += arr[i][j];
            sum2 += arr[j][i];
        }
        answer=Math.max(answer, sum1, sum2); //매번 행, 열을 돌때마다 크기 비교 후 그 전까지의 최대값인 answer 변수와 비교 후 저장 
    }
    sum1=sum2=0; // 어차피 answer 변수에 행, 열에서 비교한 최대값이 저장되어 있으니 행의 최댓값인 sum1과 열의 최댓값인 sum2는 초기화 해주어도 문제가 없다
    // 양쪽 대각선의 합을 sum1과 sum2에 각각 넣어 answer에 담겨있는 최댓값과 비교하기만 하면 끝!
    for(let k=0; k<n; k++) {
        sum1 += arr[k][k];
        sum2 += arr[k][n-1];
    }
    answer=Math.max(answer, sum1, sum2);
    return answer;
}

let arr = [
    [10, 14, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19]
];

console.log(solution(arr));
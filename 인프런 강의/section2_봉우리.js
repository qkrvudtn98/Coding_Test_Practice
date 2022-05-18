// 정답 
function solution(arr) {
    let answer=0;
    let n=arr.length;
    // dx, dy : 기준이 되는 점으로부터 상하좌우 좌표의 인덱스 값
    let dx=[-1, 0, 1, 0];
    let dy=[0, 1, 0, -1];
    for(let i=0; i<n; i++) {
        for(let j=0; j<n; j++) {
            // 봉우리인지 아닌지 판별해주는 변수 flag 설정 
            let flag=1;
            for(let k=0; k<4; k++) {
                // 상하좌우 좌표값 i-1 i+1 j-1 j+1 만들어줌 
                let nx=i+dx[k];
                let ny=j+dy[k];
                // 기준이 되는 좌표보다 같거나 작으면 봉우리가 아니라고 판단 
                if(nx>=0&&nx<n&&ny>=0&&ny<n&&arr[nx][ny]>=arr[i][j]) {
                    flag=0;
                    break;
                }                
            }
            if(flag) answer++;
        }
    }
    return answer;
}

let arr = [
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2]
]

console.log(solution(arr)); 
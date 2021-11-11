/*
문제 5: for문 계산

다음 코드의 출력 값으로 알맞은 것은?

var a = 10;
var b = 2;

for(var i=1; i<5; i+=2){
    a += i;
}

console.log(a+b);

*/

// 1
let a = 10;
let b = 2;

for (let i = 1; i < 5; i += 2) {
  // i는 1, i의 범위는 5보다 작은 수, 연산이 끝날 때 마다, i는 2씩 증가
  a += i;
  // i = 1, a는 10 + 1 = 11, i는 2씩 증가
  // i = 3, a = 11 + 3 = 14, i는 2씩 증가
  // i = 5, 범위에 벗어나므로 반복문 종료

  // 반복문 종료, a의 최종값은 14
}

console.log(a + b);
// a의 최종값 14와 변수 b의 값은 2이므로 정답은 16이다.
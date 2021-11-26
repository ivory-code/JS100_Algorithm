/*
문제44 : 각 자리수의 합

사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램을 만들어주세요

예를들어
18234 = 1+8+2+3+4 이고 정답은 18 입니다.
3849 = 3+8+4+9 이고 정답은 24입니다.

입출력

입력 : 18234
출력 : 18

입력 : 3849
출력 : 24

*/

// 1.
const solution = (number) => {
  const toString = number.toString();
  let result = 0;

  for (let i = 0; i < toString.length; i++) {
    result += parseInt(toString[i], 10);
  }
  return console.log(result);
};

solution(18234); // 18
solution(3849); // 24

// 2.
const secondSolution = (num) => {
  let result = 0; // 숫자 총합을 위한 변수 선언

  while (num !== 0) {
    // num의 값이 0이 아닌경우까지 반복
    result += num % 10; // num % 10 의 나머지 값을 더해준다.

    // Math.floor() 함수는 보다 작은 최대의 정수를 반환하거나 소정의 수와 동일한 값을 반환하는 함수다.
    // 마지막 단계에서 num의 값을 10으로 나눈 후, Math.floor() 하여 반환된 값을 재할당한다.
    num = Math.floor(num / 10);
  }

  return console.log(result); // 반복문이 종료되면 총합을 반환한다.
};

secondSolution(18234);
secondSolution(3849);

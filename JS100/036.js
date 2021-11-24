/*
문제36 : 구구단 출력하기

1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램을 작성하세요.

입출력

입력 : 2
출력 : 2 4 6 8 10 12 14 16 18

*/

// 1. 배열로 출력할 때
const solution = (number) => {
  let multipleArr = [];
  for (let i = 1; i <= 9; i++) {
    multipleArr[i - 1] = i * number;
  }
  return console.log(multipleArr);
};

solution(2);

// 2. 문자열로 출력할 때
const secondSolution = (num) => {
  let result = "";
  for (let j = 1; j <= 9; j++) {
    if (j < 9) {
      result += j * num + " ";
    } else {
      // 마지막 9를 곱할 때는 뒤에 빈 칸을 추가할 필요가 없어 조건문으로 처리하였다.
      result += j * num;
    }
  }
  return console.log(result);
};

secondSolution(2);

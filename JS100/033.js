/*
문제33 : 거꾸로 출력하기

한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.

입출력

입력 : 1 2 3 4 5
출력 : 5 4 3 2 1

입력 : 2 4 6 7 8
출력 : 8 7 6 4 2

*/

// 1. 입력형태가 배열일 경우
const solution = (arr) => {
  return console.log(arr.reverse());
};

solution([1, 2, 3, 4, 5]);

// 2. 입력형태가 문자열 경우
const secondSolution = (str) => {
  return console.log(str.split(" ").reverse());
};

secondSolution("2 4 6 7 8");

// 3. 입력받은 문자열을 숫자로 리턴할 경우
const thirdSolution = (string) => {
  let result = string.split(" ").reverse();

  for (let i = 0; i < result.length; i++) {
    result[i] = parseInt(result[i], 10);
  }

  return console.log(result);
};

thirdSolution("1 2 3 4 5");

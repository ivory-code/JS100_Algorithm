/*
문제20 : 몫과 나머지

공백으로 구분하여 두 숫자가 주어집니다.
두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

*/

// 1
const solution = (number) => {
  const splitNumber = (number).split(" ");

  const result = Math.floor(parseInt(splitNumber[0], 10) / parseInt(splitNumber[1], 10));
  const left = parseInt(splitNumber[0], 10) % parseInt(splitNumber[1], 10);
  
  console.log(result, left);
}

solution("10 2")

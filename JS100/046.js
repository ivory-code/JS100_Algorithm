/*
문제46 : 각 자리수의 합 2

1부터 20까지의(20을 포함) 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하세요. 

예를 들어 10부터 15까지의 모든 숫자를 일렬로 놓으면 101112131415이고 
각 자리의 숫자를 더하면 21입니다. (1+0+1+1+1+2+1+3+1+4+1+5 = 21)

*/

// 1.
const solution = (a, b) => {
  let arr = [];
  let join;
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  join = arr.join("");

  let result = 0;
  for (let j = 0; j < join.length; j++) {
    result += parseInt(join[j], 10);
  }
  return console.log(result);
};

solution(1, 20);

const secondSolution = (a, b) => {
  let arr = [];
  let result = 0;

  for (let i = 0; i <= b - a; i++) {
    arr[i] = a + i;
  }

  arr.forEach((n) => {
    while (n !== 0) {
      result += n % 10;
      n = Math.floor(n / 10);
    }
  });

  return console.log(result);
};

secondSolution(10, 15);

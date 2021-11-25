/*
문제41 : 소수판별

숫자가 주어지면 **소수인지 아닌지 판별하는 프로그램**을 작성해주세요.
소수이면 YES로, 소수가 아니면 NO로 출력해주세요.
(소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)

*/

// 1.
const solution = (number) => {
  if (number === 2) {
    return console.log("YES");
  } else if (number === 1) {
    return console.log("NO");
  }

  if (number % 2 === 0) {
    return console.log("NO");
  } else if (number % 2 === 1) {
    return console.log("YES");
  }
};

solution(1); // NO
solution(2); // YES
solution(3); // YES
solution(5); // YES
solution(13); // YES

// 2.
const secondSolution = (nums) => {
  for (let i = 2; i < nums; i++) {
    if (nums % i === 0) {
      return console.log("no");
    }
  }
  if (nums === 1) {
    return console.log("no");
  }
  return console.log("yes");
};

secondSolution(2); // yes
secondSolution(9); // no
secondSolution(15); // no
secondSolution(21); // no
secondSolution(23); // yes

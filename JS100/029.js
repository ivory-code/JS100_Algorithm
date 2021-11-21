/*
문제29 : 대문자만 지나가세요

진구는 영어 학원 아르바이트를 하고 있습니다. 반 아이들은 알파벳을 공부하는 학생들인데 오늘은 대문자 쓰기 시험을 봤습니다.

알파벳 하나만을 입력하고 그 알파벳이 대문자이면 YES를 아니면 NO를 출력하는 프로그램을 만들어 주세요.

*/

// 1. 단순 하드코딩으로 할 때,
const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const solution = (string) => {
  for (let i = 0; i < string.length; i++) {
    if (string === alphabet[i]) {
      return console.log("YES");
    }
    return console.log("NO");
  }
};

solution("a");

//2. 효율적인 메서드 활용
let string = "";

const secondSolution = (str) => {
  string === str;
  if (str === str.toUpperCase()) {
    return console.log("YES");
  }
  return console.log("NO");
};

secondSolution("A");

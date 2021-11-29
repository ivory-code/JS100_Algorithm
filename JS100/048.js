/*
문제48 : 대소문자 바꿔서 출력하기

문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.

입출력

입력 : AAABBBcccddd
출력 : aaabbbCCCDDD

*/

// 1.
const input1 = "AAABBBcccddd";
const input2 = "eeefffGGGHHH";

const solution = (string) => {
  let newStr = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      newStr[i] = string[i].toLowerCase();
    } else {
      newStr[i] = string[i].toUpperCase();
    }
  }

  newStr = newStr.join("");

  return console.log(newStr);
};

solution(input1); // aaabbbCCCDDD
solution(input2); // EEEFFFggghhh

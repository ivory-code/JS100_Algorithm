/*
문제47 : set 자료형의 응용

바울랩에서는 3월 29일 제주대학교에서 '제주 빅데이터 사회혁신 해커톤' 행사를 주최하게 되었습니다. 이에 구글 설문지를 배포하였으나 제주대학생들이 중복해서 n개씩 설문지를 제출하였습니다. 
**중복된 데이터들을 삭제하여 실제 접수 명단이 몇 명인지 알고 싶습니다.**

아래 주어진 데이터들로부터 중복을 제거하여 **실제 접수 인원을 출력**해 주세요.

const people = {
  이호준: "01050442903",
  이호상: "01051442904",
  이준호: "01050342904",
  이호준: "01050442903",
  이준: "01050412904",
  이호: "01050443904",
  이호준: "01050442903"
};

*/

// 1.
const people = {
  이호준: "01050442903",
  이호상: "01051442904",
  이준호: "01050342904",
  이호준: "01050442903",
  이준: "01050412904",
  이호: "01050443904",
  이호준: "01050442903",
};

// 1.
const solution = (obj) => {
  return console.log(Object.keys(obj).length);
};

solution(people);

// 2.
const secondSolution = (obj) => {
  let result = new Set();
  for (let key in obj) {
    result.add(obj[key]);
  }
  return console.log(result.size);
};

secondSolution(people);

// 3.
const thirdSolution = (obj) => {
  let newArr = [];
  for (let i in obj) {
    newArr.push(obj[i]);
  }
  return console.log(newArr.length);
};

thirdSolution(people);

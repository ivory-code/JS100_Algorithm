/*
문제42 : 2020년

2020년 1월 1일은 수요일입니다. 2020년 a월 b일은 무슨 요일일까요?
두 수 a, b를 입력받아 2020년 a월 b일이 무슨 요일인지 리턴하는 함수 solution을 완성하세요.
요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT 입니다.

예를 들어 a = 5, b = 24라면 5월 24일은 일요일이므로 문자열 "SUN"를 반환하세요.

**제한 조건**
2020년은 윤년입니다.
2020년 a월 b일은 실제로 있는 날입니다. 
(13월 26일이나 2월 45일 같은 날짜는 주어지지 않습니다.)

*/

// 1.
const solution = (month, day) => {
  const getDay = new Date(`2020-${month}-${day}`)
    .toString()
    .split(" ")[0]
    .toUpperCase();
  return console.log(getDay);
};

solution(5, 24); // SUN

// 2.
const secondSolution = (m, d) => {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const theDay = new Date(`2020-${m}-${d}`).getDay();

  return console.log(days[theDay]);
};

secondSolution(1, 1); // WED

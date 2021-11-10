/*
문제 6: False

다음은 자바스크립트 문법 중에서 False로 취급하는 것들 입니다.
앗, False로 취급하지 않는 것이 하나 있네요! **True를 찾아주세요.**

1)  NaN
2)  1
3)  ""
4)  0
5)  undefined

*/

// 1
console.log(Boolean(NaN));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(undefined));
// Boolean은 참/거짓, yes/no, on/off를 의미하는 true와 false 두 개의 값을 가지고 있는 데이터 타입이다.
// JavaScript에선 null, undefined, 0, 빈 문자열(""), NaN, false를 제외하고 true를 반환한다.

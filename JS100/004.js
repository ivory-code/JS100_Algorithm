/*
문제 4: 변수의 타입2

다음 변수 a를 typeof(a)로 넣었을 때 출력될 값과의 연결이 알맞지 않은 것은?

1)  입력 : a =1,   출력 : number

2)  입력 : b = 2.22,   출력 : boolean

3)  입력 : c = 'p',   출력 : string

4)  입력 : d = [1, 2, 3],   출력 : object

*/

// 1
const a = 1;
console.log(typeof a);
// 1은 숫자이므로 Number로 출력된다.

// 2
const b = 2.22;
console.log(typeof b);
// 2.22은 숫자이므로 Number로 출력된다.
// 그러므로 boolean으로 출력된다는 것은 거짓이므로, 알맞지 않은 것은 2번이다.

// 3
const c = "p";
console.log(typeof c);
// "p"는 문자이므로 String으로 출력된다.

// 4
const d = [1, 2, 3];
console.log(typeof d);
// 자바스크립트의 배열은 객체이므로 Object로 출력된다.

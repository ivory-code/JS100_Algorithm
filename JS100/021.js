/*
문제21 : set은 어떻게 만드나요?

다음 중 set을 만드는 방법으로 올바른 것을 모두 고르시오.

1)  var x = {1, 2, 3, 5, 6, 7};
2)  var x = {};
3)  var x = new Set('javascript');
4)  var x = new Set(range(5));
5)  var x = new Set();

*/

// 1
const answer3 = new Set('javascript');
const answer5 = new Set();

console.log(answer3, answer5)

// 정답은 3, 5번

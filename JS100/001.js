/*
문제 1: 배열의 삭제

다음 배열에서 400, 500을 삭제하는 code 입력.
*/

const nums = [100, 200, 300, 400, 500];

// 1
const ans1 = (x) => {
  x.splice(3);
  return x;
};
ans1(nums);
console.log(nums);

const nums2 = [100, 200, 300, 400, 500];

// 2
const ans2 = (x) => {
  x.pop();
  x.pop();
  return x;
};
ans2(nums2);
console.log(nums2);

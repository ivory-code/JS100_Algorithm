/*
문제40 : 놀이동산에 가자

테마파크에 온 원범이와 친구들은 놀이기구를 타려고 합니다. 모든 놀이기구는 한번에 타는 인원수에는 제한이 없지만 제한 무게를 넘으면 무조건 다음 기구를 타야 합니다. 

원범이와 친구들이 총 몇 명 탈 수 있는지 알 수 있는 프로그램을 작성해 주세요.

첫번째 입력으로 제한 무게가 주어지고 두번째 입력으로는 함께한 친구들의 수 n이 주어집니다. 
그 다음 차례대로 탑승할 친구들의 몸무게가 주어집니다. 몸무게는 무작위로 주어집니다.

입력
50
5
20
20
20
20
20

출력
2

*/

// 1.
// 각각 주어진 인자들은 제한 무게, 친구들의 숫자, 각각의 몸무게
const solution = (weight, person, input) => {
  let limit = weight; // limit라는 임의의 변수에 현재 무게값을 할당
  let enable = 0; // 놀이기구에 탑승하는 현재 인원 변수

  // 각각의 몸무게가 string으로 값이 들어올 때, split 하고
  // map 함수를 활용해 배열의 모든 요소를 parseInt 함
  let sortArr = input.split(" ").map((x) => {
    return parseInt(x, 10);
  });

  for (let i = 0; i < person; i++) {
    // 먼저 첫 번째 친구의 몸무게가 현재 무게보다 낮거나 같을 때의 조건을 본다
    if (sortArr[i] <= limit) {
      limit -= sortArr[i]; // 조건을 통과하면 현재 무게에서 친구의 몸무게만큼 감소시켜서 재할당
      enable += 1; // 조건이 통과할 때마다 현재 인원을 1명씩 추가
    }
  }

  return console.log(enable); // 반복문이 종료될 때 탑승한 인원을 console에 출력
};

solution(50, 5, "50, 10, 10, 10, 20");
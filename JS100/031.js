/*
문제31 : 자바스크립트 자료형의 복잡도

다음 배열 내장함수의 시간 복잡도가 O(1)이 아닌 것을 모두 고르시오.

1)  arr[i]
2)  arr.push(5)
3)  arr.slice()
4)  arr.pop()
5)  arr.includes(5)

*/

/**
 * @description 정답은 3번과 5번이다.
 *
 * @description 해당 문제를 이해하려면 빅오 표기법에 대해 알아야 한다.
 * @description 빅오 표기법은 알고리즘의 시간 복잡도와 공간 복잡도를 나타내는데 주로 사용된다.
 * @description 알고리즘의 러닝타임에 상관없이 데이터나 사용자의 증가율에 따른
 * @description 알고리즘의 성능을 예측하는 것이 목표이기 때문에 상수와 같은 숫자는 모두 1이 된다.
 *
 * @description O(1)의 시간 복잡도
 * @description 입력데이터의 크기와 상관없이 언제나 일정한 시간이 걸린다.
 * @description 데이터가 증가함에 따라 성능의 차이가 없다.
 *
 * @description slice는 배열의 시작과 끝의 Index 사이의 배열을 복제해서 반환하므로 O(n)이다.
 *
 * @description includes는 처음 값부터 하나씩 모두 찾으면서 값의 존재유무를 확인하기 때문에 O(n)이다.
 *
 * @description O(n)의 시간 복잡도
 * @description 입력데이터의 크기와 비례해서 처리시간이 걸리는 알고리즘을 표현할 때 사용
 * @description n개의 데이터를 받으면 n번 반복을 하게 되고, n이 늘어나는 만큼 처리시간도 늘어난다.
 * @description 항상 데이터와 시간이 비례해서 증가한다.
 */

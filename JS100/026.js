/*
문제26 : 행성 문제2

우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다.
이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune입니다.

**행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램**을 만들어 주세요.

*/

// 1
const planets = {
	'수성' : 'Mercury',
	'금성' : 'Venus',
	'지구' : 'Earth',
	'화성' : 'Mars',
	'목성' : 'Jupiter',
	'토성' : 'Saturn',
	'천왕성' : 'Uranus',
	'해왕성' : 'Neptune',
};

const solution = (name) => {
  return console.log(planets[name], "First Solution");
};

solution("수성");

// 2
const planetsArrKor =['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];
const planetsArrUs =['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

const secondeSolution = (name) => {
  console.log(planetsArrUs[planetsArrKor.indexOf(name)], "Second Solution");
};

secondeSolution("토성");
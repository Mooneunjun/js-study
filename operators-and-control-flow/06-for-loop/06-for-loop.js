// for문 (for statement)
//for (초기화부분; 조건부분; 추가동작부분) {
// 동작부분; // 반복할 코드
//}

// "자바스크립트는 재밌다!"를 10번 출력하는 반복문
for (let i = 1; i <= 10; i++) {
  console.log(`${i}번째: 자바스크립트는 재밌다!`);
}

// 5번 반복하여 "반복 시작!" 출력하기
for (let i = 1; i <= 5; i++) {
  console.log(`반복 ${i}회: 반복 시작!`);
}

// 짝수만 출력하기
for (let i = 2; i <= 10; i += 2) {
  console.log(`${i}는 짝수입니다.`);
}

// 1. 추가 동작 부분을 비워둔 예제
// for문을 사용하여 "자바스크립트 최고!"를 10번 출력하는 예제
// 추가 동작 부분을 비워두고, 반복문 내부에서 i 값을 증가시킴
for (let i = 1; i <= 10; ) {
  console.log(`${i} 자바스크립트 최고!`); // i와 함께 문자열 출력
  i++; // 동작 부분에서 i 값을 1 증가
}

// ------------------------------------------------------------

// 2. 초기화 부분에서 생성한 로컬 변수 예제
// 초기화 부분에서 생성된 변수 i는 for문 내부에서만 유효
for (let i = 1; i <= 10; i++) {
  console.log(`${i} 자바스크립트 최고!`); // i와 함께 문자열 출력
}

// for문이 끝난 후, i에 접근하려 하면 오류가 발생함
// console.log(i);  // Error: i is not defined

// ------------------------------------------------------------

// 3. 초기화 부분을 생략한 예제
// 변수 i를 for문 밖에서 초기화한 후 반복문에서 활용
let i = 1; // 반복문 외부에서 i를 선언 및 초기화

for (; i <= 10; i++) {
  console.log(`${i} 자바스크립트 최고!`); // i와 함께 문자열 출력
}

// ------------------------------------------------------------

// 4. 세미콜론이 필요한 경우 예제
// 초기화 부분을 생략하더라도 세미콜론은 반드시 두 개 필요
i = 1;

for (; i <= 10; i++) {
  // 세미콜론을 두 개 작성
  console.log(`${i} 자바스크립트 최고!`); // i와 함께 문자열 출력
}

// 설명: 세미콜론이 2개 필요함. 조건 부분과 추가 동작 부분을 구분하기 위해 필수

// ------------------------------------------------------------

// 실습
// 1. for 반복문을 사용하여 1 이상 100 이하의 짝수를 모두 출력해 보세요.

// 여기에 코드를 작성하세요
for (let i = 2; i <= 100; i += 2) {
  console.log(i);
}

//------------------------------------------------------------

// 주어진 높이(height)에 맞게 *로 삼각형을 그리는 함수 printTriangle()을 완성해 봅시다.

// 실습 결과
// 높이: 1
// *
// 높이: 3
// *
// **
// ***
// 높이: 5
// *
// **
// ***
// ****
// *****

// 여기에 코드를 작성하세요
function printTriangle(height) {
  let stars = "";
  for (let i = 1; i <= height; i++) {
    stars += "*";
    console.log(stars);
  }
}

// 테스트 코드
console.log("높이: 1");
printTriangle(1);

console.log("높이: 3");
printTriangle(3);

console.log("높이: 5");
printTriangle(5);

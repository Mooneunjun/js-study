// 자바스크립트 숫자형 기본 연산 정리

// 1. 사칙 연산
console.log(10 + 5); // 덧셈: 15
console.log(10 - 5); // 뺄셈: 5
console.log(10 * 5); // 곱셈: 50
console.log(10 / 5); // 나눗셈: 2

// 음수와 소수 계산
console.log(10 - 15); // 결과: -5
console.log(10 / 3); // 결과: 3.3333...

// 2. 나머지 연산 (%)
console.log(7 % 3); // 결과: 1
console.log(10 % 4); // 결과: 2

// 3. 거듭제곱 연산 (**)
console.log(2 ** 3); // 결과: 8
console.log(5 ** 2); // 결과: 25

// 4. 부동소수점 계산 문제 (이해 못해도 상관 없다. 나중에 다룰 예정)
console.log(0.1 + 0.2); // 결과: 0.30000000000000004
console.log((0.1 + 0.2).toFixed(1)); // 결과: 0.3

// 5. 단축 연산자
let x = 5;
x += 3; // 결과: x = 8
x -= 2; // 결과: x = 6
x *= 2; // 결과: x = 12
x /= 4; // 결과: x = 3
x **= 2; // 결과: x = 9
x %= 4; // 결과: x = 1
console.log(x); // 결과: 1

// 6. 증감 연산자 (++ / --)
let y = 10;
y++; // 결과: 11
y--; // 결과: 10
console.log(y); // 결과: 10